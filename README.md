# NodeRED WS Chat for Betabeers 03 - 2016

## Requirements

- Node installed

## Import NodeRED Server

Install **node-red** with `npm i -g node-red` and run it with `node-red`

Navigate to [localhost:1880](http://localhost:1880) to open NodeRED webapp.

Two options:

1. Copy the contents of [websocket-server.json](websocket-server.json). In the 
top right corner of NodeRED webapp, open the menu and select import clipboard,
paste the contents and place the flow into the canvas.
2. Copy the file [websocket-server.json](websocket-server.json) to your 
`.node-red/lib/flows` folder, located in your home. Then, from the menu of 
NodeRED webapp, import library.

You may access [localhost:1880/chat](http://localhost:1880/chat) for a working 
jQuery application that connects to the socket.

## Build React Client

```
npm install
npm run client
```

This will create a server on your [localhost:9000](http://localhost:9000) with 
the React Client.

## Other tasks

- `npm run build`: Runs webpack to build the client.
- `npm run prod`: Runs webpack to build the minified client.
- `npm run watch`: Development task for auto build on changes.
