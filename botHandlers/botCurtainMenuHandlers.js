const { bedMenu } = require("../markups");

exports.bedMenuHandlers = {
  attach: (telegramBot) => {
    telegramBot.onText(/🟥/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Red", bedMenu);
    });
    telegramBot.onText(/🟧/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Orange", bedMenu);
    });
    telegramBot.onText(/🟨/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Yellow", bedMenu);
    });
    telegramBot.onText(/🟩/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Green", bedMenu);
    });
    telegramBot.onText(/🟦/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Blue", bedMenu);
    });
    telegramBot.onText(/🟪/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Purple", bedMenu);
    });
    telegramBot.onText(/⬜️/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "White", bedMenu);
    });
    telegramBot.onText(/⬛️/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Black", bedMenu);
    });
    telegramBot.onText(/Rainbow🏳️‍🌈/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Rainbow", bedMenu);
    });
    telegramBot.onText(/Night🌙/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Night", bedMenu);
    });
    telegramBot.onText(/Bright🔼/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Bright Up", bedMenu);
    });
    telegramBot.onText(/Bright🔽/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Bright Down", bedMenu);
    });
  }
};