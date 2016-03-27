import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';

const UsersListActions = {

  add: function(user) {
    AppDispatcher.handleServerAction({
      actionType: Actions.UsersList.Add,
      user: user
    });
  },

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
