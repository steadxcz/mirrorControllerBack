"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableMenuHandlers = void 0;
const markups_1 = require("../markups");
exports.tableMenuHandlers = {
    attach: (telegramBot) => {
        telegramBot.onText(/🔴/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `RedBall`, markups_1.tableMenu);
        });
        telegramBot.onText(/🟠/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `OrangeBall`, markups_1.tableMenu);
        });
        telegramBot.onText(/🟡/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `YellowBall`, markups_1.tableMenu);
        });
        telegramBot.onText(/🟢/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Green`, markups_1.tableMenu);
        });
        telegramBot.onText(/🔵/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Blue`, markups_1.tableMenu);
        });
        telegramBot.onText(/🟣/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Purple`, markups_1.tableMenu);
        });
        telegramBot.onText(/⚪️/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `White`, markups_1.tableMenu);
        });
        telegramBot.onText(/⚫️/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Black`, markups_1.tableMenu);
        });
        telegramBot.onText(/Rainbow🌈/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Rainbow`, markups_1.tableMenu);
        });
        telegramBot.onText(/Night🌃/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Night`, markups_1.tableMenu);
        });
    }
};
