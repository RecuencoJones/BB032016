import UsersListActions from '../actions/UsersListActions';
import ChatActions from '../actions/ChatActions';
import Actions from '../constants/Actions';

const WS_URI = 'ws://localhost:1880/ws/broadcast';

let ws;

function processAction(rawData) {
  const data = JSON.parse(rawData);

  switch(data.type) {
    case Actions.Chat.Connect:
      UsersListActions.add(data.user);
      break;
    case Actions.Chat.Typing:

      break;
    case Actions.Chat.Message:
      ChatActions.add(data.user, data.message);
      break;
    default:
      console.error('Unexpected data type [', data.type, ']');
  }
}

const ChatService = {

  /**
   * Connects a user to the chat service.
   *
   * @param {string} userName - user name to display.
   */
  connect: function(userName) {
    ws = new WebSocket(WS_URI);

    ws.onmessage = (message) => {
      console.log('Received data', message.data);
      processAction(message.data);
    };

    ws.onopen = () => {
      this.send({
        type: Actions.Chat.Connect,
        user: userName
      });
    };

    ws.onclose = () => {
      console.log('Closed socket');
      ws = null;
    };

    ws.onerror = (error) => {
      console.error('Unexpected socket close [', error.message, ']');
    };
  },

  send: function (data) {
    ws.send(JSON.stringify(data));
  }
};

export default ChatService;
