"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const botMainMenuHandlers_1 = require("./botHandlers/botMainMenuHandlers");
const wsServer_1 = require("./wsServer");
const mirrorMenuHandlers_1 = require("./botHandlers/mirrorMenuHandlers");
class Bot {
    bot;
    token;
    constructor(token) {
        this.token = token;
    }
    start = () => {
        this.bot = new node_telegram_bot_api_1.default(this.token, { polling: true });
    };
    subscribe = () => {
        botMainMenuHandlers_1.mainMenuHandlers.attach(this.bot);
        mirrorMenuHandlers_1.mirrorMenuHandler.attach(this.bot);
        this.bot.onText(/1/, (msg) => {
            const chatId = msg.chat.id;
            this.bot.sendMessage(chatId, "Ena");
            wsServer_1.webSocketServer.enablePing();
        });
        this.bot.onText(/2/, (msg) => {
            const chatId = msg.chat.id;
            this.bot.sendMessage(chatId, "1");
            wsServer_1.webSocketServer.disablePing();
        });
    };
}
exports.Bot = Bot;
