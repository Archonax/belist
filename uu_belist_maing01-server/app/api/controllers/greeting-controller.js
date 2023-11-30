"use strict";
class GreetingController {
  helloWorld(ucEnv) {
    const dtoOut = {
      text: "Hello World!",
      uuAppErrorMap: {}, //THIS IS A TEST ONLY METHOD
    };

    return dtoOut;
  }
}

module.exports = new GreetingController();