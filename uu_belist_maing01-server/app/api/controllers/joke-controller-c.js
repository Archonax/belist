"use strict";
const JokeAbl = require("../../abl/joke-abl.js");

class JokeControllerC {
  create(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return JokeAbl.create3(awid, dtoIn);
  }
  get(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return JokeAbl.create3(awid, dtoIn);
  }
  
}

module.exports = new JokeControllerC();//getUuIdentity for user ID