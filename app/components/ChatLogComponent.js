import React from 'react';
import ChatStore from '../storages/ChatStore';

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
        {
          this.state.messages.map(function(message, index) {
            return <div key={index}>{message}</div>;
          })
        }
      </div>
    );
  },

  onUpdate: function() {
    this.setState({
      messages: ChatStore.getAll()
    });
  }
});

export default ChatLogComponent;
