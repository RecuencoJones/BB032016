import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';

const ChatActions = {

  /**
   * Add message action.
   *
   * @param {Object} data - data to add to the store.
   * @param {string} data.user - user that sent the message.
   * @param {string} data.message - message sent.
   * @param {number} data.score - score of the message.
   */
  add: function(data) {
    AppDispatcher.handleServerAction({
      actionType: Actions.Chat.Message,
      user: data.user,
      message: data.message,
      score: data.score
    });
  }
};

export default ChatActions;
