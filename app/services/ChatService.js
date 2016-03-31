import UsersListActions from '../actions/UsersListActions';
import ChatActions from '../actions/ChatActions';
import ApiService from '../services/ApiService';
import UserStore from '../stores/UserStore';
import Actions from '../constants/Actions';
import Endpoints from '../constants/Endpoints';

let ws;

function processAction(rawData) {
  const data = JSON.parse(rawData);

  switch(data.type) {
    case Actions.Chat.Connect:
      let date = new Date();

      UsersListActions.add({
        name: data.name,
        id: data.id
      });

      ChatActions.add({
        user: 'System',
        message: data.name + ' joined the room.',
        time: [
          ('0' + date.getHours()).slice(-2),
          ('0' + date.getMinutes()).slice(-2)
        ].join(':'),
        score: 0
      });
      break;
    case Actions.Chat.Disconnect:
      UsersListActions.remove(data.id);
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
        score:  data.score,
        time: data.time
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
      ApiService.registerUser(userName);
    };

    ws.onerror = (error) => {
      console.error('Unexpected socket close [', error.message, ']');
    };

    window.onbeforeunload = () => {
      this.send({
        type: Actions.Chat.Disconnect,
        user: UserStore.getUser()
      });

      ws.onclose = () => {};
      ws.close();
    };
  },

  send: function(data) {
    ws.send(JSON.stringify(data));
  }
};

export default ChatService;
