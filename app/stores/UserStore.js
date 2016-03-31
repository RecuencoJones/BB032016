import { EventEmitter } from 'events';
import _ from 'lodash';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';
import Events from '../constants/Events';

let currentUser = {};

/**
 * Adds a user to the user map.
 *
 * @param {string} user - message to push.
 */
function set(user) {
  currentUser = user;
}

const UserStore = _.assign({}, EventEmitter.prototype, {

  getUser: function() {
    return currentUser;
  },

  emitChange: function() {
    this.emit(Events.User.Set);
  },

  addChangeListener: function(callback) {
    this.on(Events.User.Set, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(Events.User.Set, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
      case Actions.User.Set:
        set(action.user);
        UserStore.emitChange();
        break;
    }

    return true;
  })
});

export default UserStore;
