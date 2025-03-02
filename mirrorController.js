class MirrorController {
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

module.exports = new MirrorController();