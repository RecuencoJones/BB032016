import AppDispatcher from '../dispatcher/AppDispatcher';
import Actions from '../constants/Actions';

const ChatActions = {

  add: function(user, message) {
    AppDispatcher.handleServerAction({
      actionType: Actions.Chat.Message,
      user: user,
      message: message
    });
  }
};

export default ChatActions;
