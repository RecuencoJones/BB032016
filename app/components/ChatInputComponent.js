import React from 'react';
import $ from 'jquery';
import ChatService from '../services/ChatService';
import Actions from '../constants/Actions';

function sendUserName() {
  let input = $('.user-name-input');

  let userName = input.val();

  this.setState({
    userName: userName
  });

  ChatService.connect(userName);

  input.val('');
}

function sendMessage() {
  let input = $('.message-input');

  ChatService.send({
    user: this.state.userName,
    type: Actions.Chat.Message,
    message: input.val()
  });

  input.val('');
}

function sendTyping() {
  ChatService.send({
    user: this.state.userName,
    type: Actions.Chat.Typing
  });
}

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
        <div className="chat-button" onClick={this.onClick}>
          <span className="fa fa-paper-plane-o"></span>
        </div>
      </div>
    );
  },

  onUserNameInput: function(event) {
    if (event.keyCode === 13) {
      sendUserName.call(this);
    }
  },

  onMessageInput: function(event) {
    if (event.keyCode === 13) {
      sendMessage.call(this);
    } else {
      sendTyping.call(this);
    }
  },

  onClick: function() {
    if (this.state.userName) {
      sendMessage.call(this);
    } else {
      sendUserName.call(this);
    }
  }
});

export default ChatInputComponent;
