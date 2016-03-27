import React from 'react';
import UsersListComponent from './UsersListComponent';
import ChatInputComponent from './ChatInputComponent';
import ChatLogComponent from './ChatLogComponent';

const AppComponent = React.createClass({

  render: () => {
    return (
      <div>

        <div>
          <UsersListComponent />
          <ChatLogComponent />
        </div>

        <div>
          <ChatInputComponent />
        </div>

      </div>
    );
  }

});

export default AppComponent;
