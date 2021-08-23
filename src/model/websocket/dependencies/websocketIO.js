var Express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const app = Express();
const server = http.createServer(app);
const io = new Server(server);

class SocketIO{

    constructor(){
        return {
            app,
            io,
            server,
        }
    }

}
module.exports = SocketIO;