"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acMenuHandlers = void 0;
const markups_1 = require("../markups");
const AcController_1 = require("../AcController");
exports.acMenuHandlers = {
    attach: (telegramBot) => {
        telegramBot.onText(/Mode⚧/, async (msg, match) => {
            await telegramBot.sendMessage(msg.chat.id, `Mode has been changed to ${AcController_1.AcControllerInstance.changeMode()}`, markups_1.acMenu);
            telegramBot.sendMessage(msg.chat.id, `${"Hi"})}`, markups_1.acMenu);
        });
        telegramBot.onText(/Swing↕️/, async (msg, match) => {
            await telegramBot.sendMessage(msg.chat.id, `Swing has been set to ${AcController_1.AcControllerInstance.switchSwing()}`, markups_1.acMenu);
            telegramBot.sendMessage(msg.chat.id, `${"Hi"})}`, markups_1.acMenu);
        });
        telegramBot.onText(/Temp🔼/, async (msg, match) => {
            await telegramBot.sendMessage(msg.chat.id, `Temperature is set to ${AcController_1.AcControllerInstance.increaseTemp()}`, markups_1.acMenu);
            telegramBot.sendMessage(msg.chat.id, `${"Hi"})}`, markups_1.acMenu);
        });
        telegramBot.onText(/Temp🔽/, async (msg, match) => {
            await telegramBot.sendMessage(msg.chat.id, `Temperature has been set to ${AcController_1.AcControllerInstance.decreaseTemp()}`, markups_1.acMenu);
            telegramBot.sendMessage(msg.chat.id, `${"Hi"})}`, markups_1.acMenu);
        });
        telegramBot.onText(/On\/Off⏯/, async (msg, match) => {
            await telegramBot.sendMessage(msg.chat.id, `State has been set to  ${AcController_1.AcControllerInstance.toggleState()}`, markups_1.acMenu);
            telegramBot.sendMessage(msg.chat.id, `${"Hi"})}`, markups_1.acMenu);
        });
        telegramBot.onText(/Power🌀/, async (msg, match) => {
            await telegramBot.sendMessage(msg.chat.id, `Power has been set to  ${AcController_1.AcControllerInstance.switchPower()}`, markups_1.acMenu);
            telegramBot.sendMessage(msg.chat.id, `${"Hi"})}`, markups_1.acMenu);
        });
    }
};
