const Endpoints = {
  Rest: {
    Host: 'http://localhost:1880',
    Api: {
      Users: '/api/users',
      Messages: '/api/messages',
      Register: '/api/register'
    }
  },
  WebSocket: 'ws://localhost:1880/ws/broadcast'
};

export default Endpoints;
