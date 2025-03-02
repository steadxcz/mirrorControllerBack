"use strict";

const { mainMenu, tableMenu, bedMenu, acMenu, curtainMenu, mirrorMenu } = require("../markups");

exports.mainMenuHandlers = {
  attach: (telegramBot) => {
    telegramBot.onText(/\/start/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Main menu options:", mainMenu);
    });
    telegramBot.onText(/Back🔙/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Main menu options:", mainMenu);
    });
    telegramBot.onText(/Table🖥/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Table menu", tableMenu);
    });
    telegramBot.onText(/Bed🛏/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Bed menu", bedMenu);
    });
    telegramBot.onText(/AC❄️/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "AC menu", acMenu);
    });
    telegramBot.onText(/Curtain💡/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Curtain menu", curtainMenu);
    });
    telegramBot.onText(/Mirror/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Mirror menu", mirrorMenu);
    });
  }
};