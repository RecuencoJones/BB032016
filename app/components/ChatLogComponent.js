import React from 'react';
import ChatStore from '../storages/ChatStore';
import $ from 'jquery';

function setMessagesLog(messages) {
  let view;

  if (messages.length) {
    view = messages.map(function(message, index) {
      return (
        <div className="message" key={index}>
          [{message.date.getHours()}:{message.date.getMinutes()}] {message.user}: {message.message}
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
  },

  componentWillUnmount: function() {
    ChatStore.removeChangeListener(this.onUpdate);
  },

  render: function() {
    return (
      <div className="chat-log">
        <div className="messages-list">
          {
            setMessagesLog(this.state.messages)
          }
        </div>
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
  }
});

export default ChatLogComponent;
