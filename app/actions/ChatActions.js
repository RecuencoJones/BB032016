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
   * @param {string} data.time - time of the message.
   */
  add: function(data) {
    AppDispatcher.handleServerAction({
      actionType: Actions.Chat.Message,
      user: data.user,
      message: data.message,
      time: data.time,
      score: data.score
    });
  },

  /**
   * Flash user typing.
   *
   * @param {Object} data - data to set.
   * @param {string} data.user - user that is typing.
   */
  flash: function(data) {
    AppDispatcher.handleServerAction({
      actionType: Actions.Chat.Typing,
      user: data.user
    });
  }
};

export default ChatActions;
