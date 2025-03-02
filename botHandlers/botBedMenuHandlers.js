"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bedMenuHandlers = void 0;
const markups_1 = require("../markups");
exports.bedMenuHandlers = {
    attach: (telegramBot) => {
        telegramBot.onText(/🟥/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Red`, markups_1.bedMenu);
        });
        telegramBot.onText(/🟧/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Orange`, markups_1.bedMenu);
        });
        telegramBot.onText(/🟨/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Yellow`, markups_1.bedMenu);
        });
        telegramBot.onText(/🟩/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Green`, markups_1.bedMenu);
        });
        telegramBot.onText(/🟦/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Blue`, markups_1.bedMenu);
        });
        telegramBot.onText(/🟪/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Purple`, markups_1.bedMenu);
        });
        telegramBot.onText(/⬜️/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `White`, markups_1.bedMenu);
        });
        telegramBot.onText(/⬛️/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Black`, markups_1.bedMenu);
        });
        telegramBot.onText(/Rainbow🏳️‍🌈/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Rainbow`, markups_1.bedMenu);
        });
        telegramBot.onText(/Night🌙/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Night`, markups_1.bedMenu);
        });
        telegramBot.onText(/Bright🔼/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Bright Up`, markups_1.bedMenu);
        });
        telegramBot.onText(/Bright🔽/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Bright Down`, markups_1.bedMenu);
        });
    }
};
