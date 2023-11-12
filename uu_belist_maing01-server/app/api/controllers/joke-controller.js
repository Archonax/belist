"use strict";
const JokeAbl = require("../../abl/joke-abl.js");

class JokeController {
  create(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return JokeAbl.create(awid, dtoIn);
  }
  
}

module.exports = new JokeController();