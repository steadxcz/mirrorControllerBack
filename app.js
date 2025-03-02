const TelegramBot = require("./telegramBot");
const WebSocketServer = require("./wsServer");

const TOKEN = "1018155409:AAELxawCawtMwFzt2fWL25hwGRQpV8PmUx0";

const tableServerTgBot = new TelegramBot.Bot(TOKEN);
tableServerTgBot.start();
tableServerTgBot.subscribe();

WebSocketServer.webSocketServer.attach();