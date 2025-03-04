const POWER = {
  ECO: 2,
  LOW: 1,
  MED: 5,
  HIGH: 3,
  TURBO: 6,
};

const STATE = {
  OFF: 1,
  ON: 0,
};

const MODE = {
  COOLING: 3,
  HEATING: 6,
  DRYING: 5,
  TRIANGLE: 7,
};

const SWING = {
  NO: 2,
  YES: 1,
};

class CodeBuilder {
  constructor() {
    this.IrCode = 0b111100100111001101010100;
  }

  getCode() {
    return this.IrCode;
  }

  setState(state) {
    // Clear bit 12 and set new state.
    this.IrCode &= ~(1 << 12);
    this.IrCode |= state << 12;
  }

  setPower(power) {
    // Clear bits 16-18, then set new power.
    this.IrCode &= ~(0b111 << 16);
    this.IrCode |= power << 16;
  }

  setTemp(desiredTemp) {
    const encodedTemp = 32 - desiredTemp;
    let reversedTemp = 0;
    for (let i = 0; i < 4; i++) {
      reversedTemp |= ((encodedTemp >> i) & 1) << (3 - i);
    }
    // Clear bits 8-11 and set new temperature.
    this.IrCode &= ~(0b1111 << 8);
    this.IrCode |= encodedTemp << 8;
  }

  setSwing(desiredSwing) {
    // Clear bits 19-20 and set new swing.
    this.IrCode &= ~(0b11 << 19);
    this.IrCode |= desiredSwing << 19;
  }

  setMode(mode) {
    // Clear bits 13-15 and set new mode.
    this.IrCode &= ~(0b111 << 13);
    this.IrCode |= mode << 13;
  }
}

module.exports = {
  CodeBuilder,
  POWER,
  STATE,
  MODE,
  SWING,
};