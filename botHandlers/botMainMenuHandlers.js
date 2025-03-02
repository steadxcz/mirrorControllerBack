"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenuHandlers = void 0;
const markups_1 = require("../markups");
exports.mainMenuHandlers = {
    attach: (telegramBot) => {
        telegramBot.onText(/\/start/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, "Main menu options:", markups_1.mainMenu);
        });
        telegramBot.onText(/Back🔙/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, "Main menu options:", markups_1.mainMenu);
        });
        telegramBot.onText(/Table🖥/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, "Main menu options:", markups_1.tableMenu);
        });
        telegramBot.onText(/Bed🛏/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, "Main menu options:", markups_1.bedMenu);
        });
        telegramBot.onText(/AC❄️/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, "Main menu options:", markups_1.acMenu);
        });
        telegramBot.onText(/Curtain💡/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, "Main menu options:", markups_1.curtainMenu);
        });
        telegramBot.onText(/Mirror/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, "Main menu options:", markups_1.mirrorMenu);
        });
    }
};
