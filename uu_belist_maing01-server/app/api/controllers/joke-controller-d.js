"use strict";
const JokeAbl = require("../../abl/joke-abl.js");

class JokeControllerD {
  create(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return JokeAbl.create4(awid, dtoIn);
  }
  
}

module.exports = new JokeControllerD();