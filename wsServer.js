const { WebSocketServer } = require("ws");
const MessageParser = require("./MessageParser");

class SocketServer {
  constructor(port) {
    this.wsServer = new WebSocketServer({ port });
    this.devicesMap = new Map();
    this.wsList = [];
    this.pinger = null;
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

module.exports.webSocketServer = new SocketServer(5050);