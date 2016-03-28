import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';

const UsersListActions = {

  /**
   * Add user action.
   *
   * @param {Object} user - user to add.
   * @param {string} user.id - user unique id.
   * @param {string} user.name - user name.
   */
  add: function(user) {
    AppDispatcher.handleServerAction({
      actionType: Actions.UsersList.Add,
      user: user
    });
  },

  /**
   * Remove user action.
   *
   * @param {string} userId - user unique id.
   */
  remove: function(userId) {
    AppDispatcher.handleServerAction({
      actionType: Actions.UsersList.Remove,
      user: {
        id: userId
      }
    });
  }
};

export default UsersListActions;
