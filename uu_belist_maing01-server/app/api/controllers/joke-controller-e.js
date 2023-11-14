"use strict";
const JokeAbl = require("../../abl/joke-abl.js");

class JokeControllerE {
  create(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return JokeAbl.create5(awid, dtoIn);
  }
  
}

module.exports = new JokeControllerE();