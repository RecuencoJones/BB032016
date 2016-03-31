import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';

const UserActions = {

  /**
   * Add message action.
   *
   * @param {Object} user - user to set in store.
   * @param {string} user.name - user name.
   * @param {number} user.id - user id.
   */
  set: function(user) {
    AppDispatcher.handleServerAction({
      actionType: Actions.User.Set,
      user: user
    });
  }
};

export default UserActions;
