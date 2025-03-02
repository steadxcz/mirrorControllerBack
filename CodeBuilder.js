"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeBuilder = exports.SWING = exports.MODE = exports.STATE = exports.POWER = void 0;
var POWER;
(function (POWER) {
    POWER[POWER["ECO"] = 2] = "ECO";
    POWER[POWER["LOW"] = 1] = "LOW";
    POWER[POWER["MED"] = 5] = "MED";
    POWER[POWER["HIGH"] = 3] = "HIGH";
    POWER[POWER["TURBO"] = 6] = "TURBO";
})(POWER || (exports.POWER = POWER = {}));
var STATE;
(function (STATE) {
    STATE[STATE["OFF"] = 1] = "OFF";
    STATE[STATE["ON"] = 0] = "ON";
})(STATE || (exports.STATE = STATE = {}));
var MODE;
(function (MODE) {
    MODE[MODE["COOLING"] = 3] = "COOLING";
    MODE[MODE["HEATING"] = 6] = "HEATING";
    MODE[MODE["DRYING"] = 5] = "DRYING";
    MODE[MODE["TRIANGLE"] = 7] = "TRIANGLE";
})(MODE || (exports.MODE = MODE = {}));
var SWING;
(function (SWING) {
    SWING[SWING["NO"] = 2] = "NO";
    SWING[SWING["YES"] = 1] = "YES";
})(SWING || (exports.SWING = SWING = {}));
class CodeBuilder {
    IrCode;
    constructor() {
        this.IrCode = 0b111100100111001101010100;
    }
    getCode() {
        return this.IrCode;
    }
    setState(state) {
        this.IrCode &= ~(1 << 12);
        this.IrCode |= state << 12;
    }
    setPower(power) {
        this.IrCode &= ~(0b111 << 16);
        this.IrCode |= (power << 16);
    }
    setTemp(desiredTemp) {
        let encodedTemp = 32 - desiredTemp;
        let reversedTemp = 0;
        for (let i = 0; i < 4; i++) {
            reversedTemp |= ((encodedTemp >> i) & 1) << 3 - i;
        }
        this.IrCode &= ~(0b1111 << 8);
        this.IrCode |= (encodedTemp << 8);
    }
    setSwing(desiredSwing) {
        this.IrCode &= ~(0b11 << 19);
        this.IrCode |= (desiredSwing << 19);
    }
    setMode(mode) {
        this.IrCode &= ~(0b111 << 13);
        this.IrCode |= (mode << 13);
    }
}
exports.CodeBuilder = CodeBuilder;
