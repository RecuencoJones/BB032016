import UsersListActions from '../actions/UsersListActions';
import ApiService from './ApiService';
import ChatActions from '../actions/ChatActions';
import Actions from '../constants/Actions';
import Endpoints from '../constants/Endpoints';

let ws;

function processAction(rawData) {
  const data = JSON.parse(rawData);

  switch(data.type) {
    case Actions.Chat.Connect:
      UsersListActions.add(data.user);
      ChatActions.add({
        user: 'System',
        message: data.user.name + ' joined the room.',
        score: 0
      });
      break;
    case Actions.Chat.Typing:
      ChatActions.flash({
        user: data.user
      });
      break;
    case Actions.Chat.Message:
      ChatActions.add({
        user: data.user,
        message: data.message,
        score:  data.score
      });
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
    ws = new WebSocket(Endpoints.WebSocket);

    ws.onmessage = (message) => {
      console.log('Received data', message.data);
      processAction(message.data);
    };

    ws.onopen = () => {
      this.send({
        type: Actions.Chat.Connect,
        user: userName
      });

      ApiService.getMessages();
      ApiService.getUsers();
    };

    ws.onclose = () => {
      ws.close();
      ws = null;
      console.log('Closed socket');
    };

    ws.onerror = (error) => {
      console.error('Unexpected socket close [', error.message, ']');
    };
  },

  send: function(data) {
    ws.send(JSON.stringify(data));
  }
};

export default ChatService;
