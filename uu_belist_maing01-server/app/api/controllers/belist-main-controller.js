"use strict";
const BelistMainAbl = require("../../abl/belist-main-abl.js");

class BelistMainController {
  init(ucEnv) {
    return BelistMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return BelistMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return BelistMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new BelistMainController();
