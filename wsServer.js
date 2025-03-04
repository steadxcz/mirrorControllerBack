const { WebSocketServer } = require("ws");
const MessageParser = require("./MessageParser");

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const PORT = config.WSPORT;

class SocketServer {
  constructor(port) {
    this.wsServer = new WebSocketServer({port});
    this.devicesMap = new Map();
    this.wsList = [];
    this.pinger = null;

    console.log(`WebSocket server started on port ${port}`);
  }

  attach() {
    this.wsServer.on("connection", (ws) => {
      console.log("New device on ws");
      this.wsList.push(ws);
      this.enablePing();
      ws.on("error", console.error);
      ws.on("message", (data) => {
        const payload = JSON.parse(data.toString());
        this.devicesMap.set(payload.deviceId, ws);
        ws.send(`Successfully binded device ${payload.deviceId}`);
        MessageParser.routeMessage(payload.deviceId, payload.message);
      });
    });
  }

  enablePing() {
    this.pinger = setInterval(() => {
      this.wsList.forEach((ws) => {
        ws.ping();
      });
    }, 1000);
  }

  disablePing() {
    clearInterval(this.pinger);
  }
}

module.exports.webSocketServer = new SocketServer(PORT);