import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/AppComponent';
import ChatService from './services/ChatService';

require('./styles/style.scss');

ReactDOM.render(<AppComponent />, document.getElementById('chat-app'));
