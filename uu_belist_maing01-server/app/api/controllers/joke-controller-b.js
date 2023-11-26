"use strict";
const JokeAbl = require("../../abl/joke-abl.js");

class JokeControllerB {
  create(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return JokeAbl.create2(awid, dtoIn);
  }
  
}

module.exports = new JokeControllerB();//getUuIdentity for user ID