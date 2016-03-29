const Endpoints = {
  Rest: {
    Host: 'http://localhost:1880',
    Api: {
      Users: '/api/users',
      Messages: '/api/messages'
    }
  },
  WebSocket: 'ws://localhost:1880/ws/broadcast'
};

export default Endpoints;
