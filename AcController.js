"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcControllerInstance = void 0;
const CodeBuilder_1 = require("./CodeBuilder");
class AcController extends CodeBuilder_1.CodeBuilder {
    constructor() {
        super();
    }
    acCurrentState = {
        temp: 24,
        mode: CodeBuilder_1.MODE.COOLING,
        power: CodeBuilder_1.POWER.ECO,
        state: CodeBuilder_1.STATE.OFF,
        swing: CodeBuilder_1.SWING.NO
    };
    toggleState() {
        this.acCurrentState.state = this.acCurrentState.state ? CodeBuilder_1.STATE.ON : CodeBuilder_1.STATE.OFF;
        super.setState(this.acCurrentState.state);
        console.log(`state changed to ${CodeBuilder_1.STATE[this.acCurrentState.state]}`);
        return CodeBuilder_1.STATE[this.acCurrentState.state];
    }
    switchSwing() {
        if (this.acCurrentState.swing == CodeBuilder_1.SWING.NO) {
            this.acCurrentState.swing = CodeBuilder_1.SWING.YES;
        }
        else {
            this.acCurrentState.swing = CodeBuilder_1.SWING.NO;
        }
        super.setSwing(this.acCurrentState.swing);
        return CodeBuilder_1.SWING[this.acCurrentState.swing];
    }
    switchPower() {
        switch (this.acCurrentState.power) {
            case CodeBuilder_1.POWER.ECO:
                this.acCurrentState.power = CodeBuilder_1.POWER.HIGH;
                break;
            case CodeBuilder_1.POWER.HIGH:
                this.acCurrentState.power = CodeBuilder_1.POWER.TURBO;
                break;
            case CodeBuilder_1.POWER.TURBO:
                this.acCurrentState.power = CodeBuilder_1.POWER.ECO;
                break;
        }
        super.setPower(this.acCurrentState.power);
        console.log(`power changed to ${CodeBuilder_1.POWER[this.acCurrentState.power]}`);
        return CodeBuilder_1.POWER[this.acCurrentState.power];
    }
    increaseTemp() {
        if (this.acCurrentState.temp < 30) {
            this.acCurrentState.temp++;
            super.setTemp(this.acCurrentState.temp);
        }
        return this.acCurrentState.temp;
    }
    decreaseTemp() {
        if (this.acCurrentState.temp > 18) {
            this.acCurrentState.temp--;
            super.setTemp(this.acCurrentState.temp);
        }
        return this.acCurrentState.temp;
    }
    changeMode() {
        if (this.acCurrentState.mode == CodeBuilder_1.MODE.COOLING) {
            this.acCurrentState.mode = CodeBuilder_1.MODE.HEATING;
        }
        else if (this.acCurrentState.mode == CodeBuilder_1.MODE.HEATING) {
            this.acCurrentState.mode = CodeBuilder_1.MODE.COOLING;
        }
        super.setMode(this.acCurrentState.mode);
        console.log(`mode changed to ${CodeBuilder_1.MODE[this.acCurrentState.mode]}`);
        return CodeBuilder_1.MODE[this.acCurrentState.mode];
    }
    getAcState() {
        return this.acCurrentState;
    }
    generateCode() {
        return super.getCode();
    }
}
exports.AcControllerInstance = new AcController();
