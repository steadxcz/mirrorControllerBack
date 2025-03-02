"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curtainMenuHandlers = void 0;
const markups_1 = require("../markups");
exports.curtainMenuHandlers = {
    attach: (telegramBot) => {
        telegramBot.onText(/Brightness🔼/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `BU`, markups_1.curtainMenu);
        });
        telegramBot.onText(/Brightness🔽/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `BD`, markups_1.curtainMenu);
        });
        telegramBot.onText(/Mode🔠/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Mode`, markups_1.curtainMenu);
        });
        telegramBot.onText(/On\\Off⏯/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `OnOf`, markups_1.curtainMenu);
        });
    }
};
