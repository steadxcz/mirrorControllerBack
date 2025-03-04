"use strict";

const { mirrorMenu } = require("../markups");
const mirrorController = require("../mirrorController");
const { webSocketServer } = require("../wsServer");

exports.mirrorMenuHandler = {
  attach: (telegramBot) => {
    telegramBot.onText(/ON/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Mirror on", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setBulbMode("on");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/OFF/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Mirror off", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setBulbMode("off");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/Night/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Night", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setBulbMode("part");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/🔴/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Red", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedColor("red");
      mirrorController.setLedMode("static");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/🟠/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Orange", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedColor("orange");
      mirrorController.setLedMode("static");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/🟡/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Yellow", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedColor("yellow");
      mirrorController.setLedMode("static");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/🟢/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Green", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedColor("green");
      mirrorController.setLedMode("static");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/🔵/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Blue", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedColor("blue");
      mirrorController.setLedMode("static");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/🟣/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Purple", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedColor("purple");
      mirrorController.setLedMode("static");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/⚪/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "White", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedColor("white");
      mirrorController.setLedMode("static");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/⚫/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Black", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedColor("black");
      mirrorController.setLedMode("static");
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });

    telegramBot.onText(/Custom/, (msg) => {
      telegramBot.sendMessage(msg.chat.id, "Custom", mirrorMenu);
      const device = webSocketServer.devicesMap.get("mirror");
      mirrorController.setLedMode("custom");
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
      }
      mirrorController.setCustomParams(customParam);
      const mirrorState = mirrorController.getMirrorState();
      console.log(mirrorState);
      device?.send(mirrorState);
    });
  }
};