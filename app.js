"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telegramBot_1 = require("./telegramBot");
const wsServer_1 = require("./wsServer");
const TOKEN = "1018155409:AAELxawCawtMwFzt2fWL25hwGRQpV8PmUx0";
const tableServerTgBot = new telegramBot_1.Bot(TOKEN);
tableServerTgBot.start();
tableServerTgBot.subscribe();
wsServer_1.webSocketServer.attach();
