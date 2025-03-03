const TelegramBot = require("./telegramBot");
const WebSocketServer = require("./wsServer");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.TELEGRAM_BOT_TOKEN);
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;

const tableServerTgBot = new TelegramBot.Bot(TOKEN);
tableServerTgBot.start();
tableServerTgBot.subscribe();

WebSocketServer.webSocketServer.attach();