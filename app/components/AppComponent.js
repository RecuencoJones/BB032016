import React from 'react';
import UsersListComponent from './UsersListComponent';
import ChatInputComponent from './ChatInputComponent';
import ChatLogComponent from './ChatLogComponent';

const AppComponent = React.createClass({

  render: function() {
    return (
      <div className="main-layout">

        <div className="top-layout">
          <div className="header">Chat React Client</div>
        </div>

        <div className="mid-layout">
          <UsersListComponent />
          <ChatLogComponent />
        </div>

        <div className="bottom-layout">
          <ChatInputComponent />
        </div>

      </div>
    );
  }

});

export default AppComponent;
