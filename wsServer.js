"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webSocketServer = void 0;
const ws_1 = require("ws");
const MessageParser_1 = __importDefault(require("./MessageParser"));
class socketServer {
    wsServer;
    devicesMap = new Map();
    wsList = [];
    pinger;
    constructor(_port) {
        this.wsServer = new ws_1.WebSocketServer({ port: _port });
    }
    attach = () => {
        this.wsServer.on('connection', (ws) => {
            console.log(`new device on ws`);
            this.wsList.push(ws);
            this.enablePing();
            ws.on('error', console.error);
            ws.on('message', (data) => {
                const payload = JSON.parse(data.toString());
                this.devicesMap.set(payload.deviceId, ws);
                ws.send(`successfully binded device ${payload.deviceId}`);
                MessageParser_1.default.routeMessage(payload.deviceId, payload.message);
            });
        });
    };
    enablePing = () => {
        this.pinger = setInterval(() => {
            this.wsList.forEach((ws) => {
                ws.ping();
            });
        }, 1000);
    };
    disablePing = () => {
        clearInterval(this.pinger);
    };
}
exports.webSocketServer = new socketServer(5050);
