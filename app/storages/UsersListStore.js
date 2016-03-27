import { EventEmitter } from 'events';
import _ from 'lodash';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';
import Events from '../constants/Events';

const users = {};

/**
 * Adds a user to the user map.
 *
 * @param {Object} user - user to push.
 * @param {string} user.name - display name of the user.
 * @param {string} user.id - user unique id.
 */
function add(user) {
  users[user.id] = _.clone(user);
}

/**
 * Removes a user from the user map.
 *
 * @param {string} userId - user unique id.
 */
function remove(userId) {
  users[userId] = null;
}

const UsersListStore = _.assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _.cloneDeep(users);
  },

  emitChange: function() {
    this.emit(Events.UsersList.Update);
  },

  addChangeListener: function(callback) {
    this.on(Events.UsersList.Update, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(Events.UsersList.Update, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
      case Actions.UsersList.Add:
        add(action.user);
        UsersListStore.emitChange();
        break;

      case Actions.UsersList.Remove:
        remove(action.user.id);
        UsersListStore.emitChange();
        break;
    }

    return true;
  })
});

export default UsersListStore;
