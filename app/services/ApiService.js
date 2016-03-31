import UsersListActions from '../actions/UsersListActions';
import ChatActions from '../actions/ChatActions';
import UserActions from '../actions/UserActions';
import ChatService from '../services/ChatService';
import Endpoints from '../constants/Endpoints';

const ApiService = {

  /**
   * Gets connected users to the chat service.
   */
  getUsers: function() {
    return new Promise((resolve) => {
      http({
        url: Endpoints.Rest.Host + Endpoints.Rest.Api.Users
      })
      .success(function(users) {
        users.forEach((user) => {
          UsersListActions.add(user);
        });
        resolve();
      });
    });
  },

  /**
   * Gets last 5 messages from the room.
   */
  getMessages: function() {
    return new Promise((resolve) => {
      http({
        url: Endpoints.Rest.Host + Endpoints.Rest.Api.Messages
      })
      .success(function(messages) {
        messages.forEach((message) => {
          ChatActions.add(message);
        });
        resolve();
      });
    });
  },

  registerUser: function(name) {
    return new Promise((resolve) => {
      http({
        url: Endpoints.Rest.Host + Endpoints.Rest.Api.Register,
        method: 'POST',
        data: {
          user: name
        }
      })
      .success(function(user) {
        UserActions.set(user);
        resolve();
      });
    });
  }
};

export default ApiService;

