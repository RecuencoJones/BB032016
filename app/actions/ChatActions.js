import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';

const ChatActions = {

  /**
   * Add message action.
   *
   * @param {string} user - user that sent the message.
   * @param {string} message - message sent.
   * @param {number} score - score of the message.
   */
  add: function(user, message, score) {
    AppDispatcher.handleServerAction({
      actionType: Actions.Chat.Message,
      user: user,
      message: message,
      score: score
    });
  }
};

export default ChatActions;
