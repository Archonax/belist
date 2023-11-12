"use strict";
const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;

const Errors = require("../api/errors/joke-error.js");
const Warnings = require("../api/warnings/joke-warning.js");


class JokeAbl {
  constructor() {
    this.validator = Validator.load();
  }

  create(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("jokeCreateDtoInType", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // check for fishy words
    /*FISHY_WORDS.forEach((word) => {
      if (dtoIn.text.includes(word)) {
        throw new Errors.Create.TextContainsFishyWords({ uuAppErrorMap }, { text: dtoIn.text, fishyWord: word });
      }
    });*/

    // prepare and return dtoOut
    const dtoOut = { ...dtoIn };
    //dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
  
}

module.exports = new JokeAbl();