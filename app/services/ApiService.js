import UsersListActions from '../actions/UsersListActions';
import ChatActions from '../actions/ChatActions';
import Endpoints from '../constants/Endpoints';

const ApiService = {

  /**
   * Gets connected users to the chat service.
   */
  getUsers: function() {
    http({
      url: Endpoints.Rest.Host + Endpoints.Rest.Api.Users
    })
    .success(function(users) {
      users.forEach((user) => {
        UsersListActions.add(user);
      });
    });
  },

  /**
   * Gets last 5 messages from the room.
   */
  getMessages: function() {
    http({
      url: Endpoints.Rest.Host + Endpoints.Rest.Api.Messages
    })
    .success(function(messages) {
      messages.forEach((message) => {
        ChatActions.add(message);
      });
    });
  }
};

export default ApiService;

