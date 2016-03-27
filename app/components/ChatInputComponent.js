import React from 'react';
import ChatService from '../services/ChatService';
import Actions from '../constants/Actions';

const ChatInputComponent = React.createClass({
  getInitialState: function() {
    return {
      userName: ''
    };
  },

  render: function() {
    return (
      <div className="chat-input">
        <input type="text" placeholder="Set your user name" onKeyUp={this.onUserNameInput} readOnly={this.state.userName}/>
        <input type="text" placeholder="Say something" onKeyUp={this.onMessageInput} readOnly={!this.state.userName}/>
      </div>
    );
  },

  onUserNameInput: function(event) {
    if (event.keyCode === 13) {
      this.setState({
        userName: event.target.value
      });

      ChatService.connect(event.target.value);
    }
  },

  onMessageInput: function(event) {
    if (event.keyCode === 13) {
      ChatService.send({
        user: this.state.userName,
        type: Actions.Chat.Message,
        message: event.target.value
      });

      event.target.value = '';
    } else {
      ChatService.send({
        user: this.state.userName,
        type: Actions.Chat.Typing
      });
    }
  }
});

export default ChatInputComponent;
