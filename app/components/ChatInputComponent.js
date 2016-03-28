import React from 'react';
import ChatService from '../services/ChatService';
import Actions from '../constants/Actions';

function getInput() {
  let view;

  if (!this.state.userName) {
    view = (
      <input className="user-name-input"
        type="text"
        placeholder="Set your name"
        onKeyUp={this.onUserNameInput}/>
      );
  } else {
    view = (
      <input className="message-input"
        type="text"
        placeholder="Say something"
        onKeyUp={this.onMessageInput}/>
    );
  }

  return view;
}

const ChatInputComponent = React.createClass({
  getInitialState: function() {
    return {
      userName: ''
    };
  },

  render: function() {
    return (
      <div className="chat-input">
        {
          getInput.call(this)
        }
      </div>
    );
  },

  onUserNameInput: function(event) {
    if (event.keyCode === 13) {
      let userName = event.target.value;

      this.setState({
        userName: userName
      });

      ChatService.connect(userName);

      event.target.value = '';
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
