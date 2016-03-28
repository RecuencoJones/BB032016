# NodeRED WS Chat for Betabeers 03 - 2016

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

Install this package and open [index.html](index.html) file.
