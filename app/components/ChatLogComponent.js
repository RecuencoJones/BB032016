import React from 'react';
import ChatStore from '../storages/ChatStore';
import $ from 'jquery';

function setMessageColor(score) {
  let classNames = ['message'];

  if (score >= 3) {
    classNames.push('positive');
  } else if (score <= -3) {
    classNames.push('negative');
  }

  return classNames.join(' ');
}

function setMessagesLog(messages) {
  let view;

  if (messages.length) {
    view = messages.map(function(message, index) {
      return (
        <div className={setMessageColor(message.score)} key={index}>
          [{message.time}] {message.user}: {message.message}
        </div>
      );
    });
  } else {
    view = <div>Set a user name and start chatting!</div>;
  }

  return view;
}

const ChatLogComponent = React.createClass({
  getInitialState: function() {
    return {
      messages: []
    };
  },

  componentDidMount: function() {
    ChatStore.addChangeListener(this.onUpdate);
    ChatStore.addTypingListener(this.flashTyping);
  },

  componentWillUnmount: function() {
    ChatStore.removeChangeListener(this.onUpdate);
    ChatStore.removeTypingListener(this.flashTyping);
  },

  render: function() {
    return (
      <div className="chat-log">
        <div className="messages-list">
          {
            setMessagesLog(this.state.messages)
          }
        </div>
        <div className="typing"></div>
      </div>
    );
  },

  onUpdate: function() {
    this.setState({
      messages: ChatStore.getAll()
    });

    let list = $('.messages-list');

    list.parent().animate({
      scrollTop: list.height()
    });
  },

  flashTyping: function(user) {
    let typing = $('.typing');

    typing.html(`<i class="fa fa-pencil"></i>&nbsp;${user}</div>`);

    typing.show();
    typing.hide(1000);
  }
});

export default ChatLogComponent;
