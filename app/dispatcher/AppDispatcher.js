import { Dispatcher } from 'flux';
import _ from 'lodash';

const AppDispatcher = _.assign(new Dispatcher(), {
  handleServerAction: function(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    });
  },

  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

export default AppDispatcher;
