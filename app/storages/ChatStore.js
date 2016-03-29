import { EventEmitter } from 'events';
import _ from 'lodash';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';
import Events from '../constants/Events';

const messages = [];

/**
 * Adds a user to the user map.
 *
 * @param {string} message - message to push.
 */
function add(message) {
  messages.push(message);
}

const ChatStore = _.assign({}, EventEmitter.prototype, {

  getAll: function() {
    return messages;
  },

  emitChange: function() {
    this.emit(Events.Chat.Update);
  },

  emitTyping: function(user) {
    this.emit(Events.Chat.Typing, user);
  },

  addChangeListener: function(callback) {
    this.on(Events.Chat.Update, callback);
  },

  addTypingListener: function(callback) {
    this.on(Events.Chat.Typing, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(Events.Chat.Update, callback);
  },

  removeTypingListener: function(callback) {
    this.removeListener(Events.Chat.Typing, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
      case Actions.Chat.Message:
        add({
          date: new Date(),
          user: action.user,
          message: action.message,
          score: action.score
        });
        ChatStore.emitChange();
        break;
      case Actions.Chat.Typing:
        ChatStore.emitTyping(action.user);
        break;
    }

    return true;
  })
});

export default ChatStore;
