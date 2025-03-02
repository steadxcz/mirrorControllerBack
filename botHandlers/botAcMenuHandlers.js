const { acMenu } = require("../markups");
const { AcControllerInstance } = require("../AcController");

exports.acMenuHandlers = {
  attach: (telegramBot) => {
    telegramBot.onText(/Mode⚧/, async (msg) => {
      const mode = AcControllerInstance.changeMode();
      await telegramBot.sendMessage(msg.chat.id, `Mode has been changed to ${mode}`, acMenu);
    });
    telegramBot.onText(/Swing↕️/, async (msg) => {
      const swing = AcControllerInstance.switchSwing();
      await telegramBot.sendMessage(msg.chat.id, `Swing has been set to ${swing}`, acMenu);
    });
    telegramBot.onText(/Temp🔼/, async (msg) => {
      const temp = AcControllerInstance.increaseTemp();
      await telegramBot.sendMessage(msg.chat.id, `Temperature is set to ${temp}`, acMenu);
    });
    telegramBot.onText(/Temp🔽/, async (msg) => {
      const temp = AcControllerInstance.decreaseTemp();
      await telegramBot.sendMessage(msg.chat.id, `Temperature has been set to ${temp}`, acMenu);
    });
    telegramBot.onText(/On\/Off⏯/, async (msg) => {
      const state = AcControllerInstance.toggleState();
      await telegramBot.sendMessage(msg.chat.id, `State has been set to ${state}`, acMenu);
    });
    telegramBot.onText(/Power🌀/, async (msg) => {
      const power = AcControllerInstance.switchPower();
      await telegramBot.sendMessage(msg.chat.id, `Power has been set to ${power}`, acMenu);
    });
  }
};