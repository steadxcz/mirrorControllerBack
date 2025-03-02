const { CodeBuilder, MODE, POWER, STATE, SWING } = require("./CodeBuilder");

class AcController extends CodeBuilder {
  constructor() {
    super();
    this.acCurrentState = {
      temp: 24,
      mode: MODE.COOLING,
      power: POWER.ECO,
      state: STATE.OFF,
      swing: SWING.NO,
    };
  }

  toggleState() {
    this.acCurrentState.state = this.acCurrentState.state ? STATE.ON : STATE.OFF;
    this.setState(this.acCurrentState.state);
    console.log(`state changed to ${STATE[this.acCurrentState.state]}`);
    return STATE[this.acCurrentState.state];
  }

  switchSwing() {
    this.acCurrentState.swing =
      this.acCurrentState.swing === SWING.NO ? SWING.YES : SWING.NO;
    this.setSwing(this.acCurrentState.swing);
    return SWING[this.acCurrentState.swing];
  }

  switchPower() {
    switch (this.acCurrentState.power) {
      case POWER.ECO:
        this.acCurrentState.power = POWER.HIGH;
        break;
      case POWER.HIGH:
        this.acCurrentState.power = POWER.TURBO;
        break;
      case POWER.TURBO:
        this.acCurrentState.power = POWER.ECO;
        break;
    }
    this.setPower(this.acCurrentState.power);
    console.log(`power changed to ${POWER[this.acCurrentState.power]}`);
    return POWER[this.acCurrentState.power];
  }

  increaseTemp() {
    if (this.acCurrentState.temp < 30) {
      this.acCurrentState.temp++;
      this.setTemp(this.acCurrentState.temp);
    }
    return this.acCurrentState.temp;
  }

  decreaseTemp() {
    if (this.acCurrentState.temp > 18) {
      this.acCurrentState.temp--;
      this.setTemp(this.acCurrentState.temp);
    }
    return this.acCurrentState.temp;
  }

  changeMode() {
    this.acCurrentState.mode =
      this.acCurrentState.mode === MODE.COOLING ? MODE.HEATING : MODE.COOLING;
    this.setMode(this.acCurrentState.mode);
    console.log(`mode changed to ${MODE[this.acCurrentState.mode]}`);
    return MODE[this.acCurrentState.mode];
  }

  getAcState() {
    return this.acCurrentState;
  }

  generateCode() {
    return this.getCode();
  }
}

module.exports.AcControllerInstance = new AcController();