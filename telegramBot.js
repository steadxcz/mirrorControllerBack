const TelegramBotAPI = require("node-telegram-bot-api");
const { mainMenuHandlers } = require("./botHandlers/botMainMenuHandlers");
const { webSocketServer } = require("./wsServer");
const { mirrorMenuHandler } = require("./botHandlers/mirrorMenuHandlers");

class Bot {
  constructor(token) {
    this.token = token;
    this.bot = null;
  }

  start() {
    this.bot = new TelegramBotAPI(this.token, { polling: true });
  }

  subscribe() {
    mainMenuHandlers.attach(this.bot);
    mirrorMenuHandler.attach(this.bot);

    this.bot.onText(/1/, (msg) => {
      const chatId = msg.chat.id;
      this.bot.sendMessage(chatId, "Ena");
      webSocketServer.enablePing();
    });

    this.bot.onText(/2/, (msg) => {
      const chatId = msg.chat.id;
      this.bot.sendMessage(chatId, "1");
      webSocketServer.disablePing();
    });
  }
}

module.exports.Bot = Bot;