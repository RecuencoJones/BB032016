import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';

const ChatActions = {

  /**
   * Add message action.
   *
   * @param {string} user - user that sent the message.
   * @param {string} message - message sent.
   */
  add: function(user, message) {
    AppDispatcher.handleServerAction({
      actionType: Actions.Chat.Message,
      user: user,
      message: message
    });
  }
};

export default ChatActions;
