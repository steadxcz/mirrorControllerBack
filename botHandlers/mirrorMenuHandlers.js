"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mirrorMenuHandler = void 0;
const markups_1 = require("../markups");
const mirrorController_1 = require("../mirrorController");
const wsServer_1 = require("../wsServer");
exports.mirrorMenuHandler = {
    attach: (telegramBot) => {
        telegramBot.onText(/ON/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Mirror on`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setBulbMode("on");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/OFF/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Mirror off`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setBulbMode("off");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/Night/, (msg, match) => {
            telegramBot.sendMessage(msg.chat.id, `Night`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setBulbMode("part");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/🔴/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `Red`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedColor("red");
            mirrorController_1.mirrorController.setLedMode("static");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/🟠/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `Orange`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedColor("orange");
            mirrorController_1.mirrorController.setLedMode("static");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/🟡/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `yellow`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedColor("yellow");
            mirrorController_1.mirrorController.setLedMode("static");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/🟢/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `Green`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedColor("green");
            mirrorController_1.mirrorController.setLedMode("static");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/🔵/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `Blue`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedColor("blue");
            mirrorController_1.mirrorController.setLedMode("static");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/🟣/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `purple`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedColor("purple");
            mirrorController_1.mirrorController.setLedMode("static");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/⚪/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `White`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedColor("white");
            mirrorController_1.mirrorController.setLedMode("static");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/⚫/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `Black`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedColor("black");
            mirrorController_1.mirrorController.setLedMode("static");
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
        telegramBot.onText(/Custom/, (msg) => {
            telegramBot.sendMessage(msg.chat.id, `Custom`, markups_1.mirrorMenu);
            const device = wsServer_1.webSocketServer.devicesMap.get("mirror");
            mirrorController_1.mirrorController.setLedMode("custom");
            let customParam = 0;
            switch (msg.text) {
                case "Custom 1":
                    customParam = 1;
                    break;
                case "Custom 2":
                    customParam = 2;
                    break;
                case "Custom 3":
                    customParam = 3;
                    break;
                default:
                    customParam = 0;
                    break;
            }
            mirrorController_1.mirrorController.setCustomParams(customParam);
            const mirrorState = mirrorController_1.mirrorController.getMirrorState();
            console.log(mirrorState);
            device?.send(mirrorState);
        });
    }
};
