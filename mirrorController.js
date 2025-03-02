"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mirrorController = void 0;
class _mirrorController {
    bulbMode;
    ledMode;
    ledColor;
    customParams;
    constructor() {
        this.bulbMode = "off";
        this.ledMode = "static";
        this.ledColor = "black";
        this.customParams = 0;
    }
    getMirrorState() {
        return JSON.stringify(this);
    }
    setBulbMode(mode) {
        this.bulbMode = mode;
    }
    setLedMode(mode) {
        this.ledMode = mode;
    }
    setLedColor(color) {
        this.ledColor = color;
    }
    setCustomParams(params) {
        this.customParams = params;
    }
}
exports.mirrorController = new _mirrorController();
