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

    // prepare and return dtoOut
    const dtoOut = { ...dtoIn };
    //dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
  create2(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("jokeCreateDtoInType2", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // prepare and return dtoOut
    const dtoOut = { ...dtoIn };
    //dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
  create3(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("jokeCreateDtoInType3", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // prepare and return dtoOut
    const dtoOut = { ...dtoIn };
    //dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
  create4(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("jokeCreateDtoInType4", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // prepare and return dtoOut
    const dtoOut = { ...dtoIn };
    //dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
  create5(awid, dtoIn) {
    let uuAppErrorMap = {};

    // validation of dtoIn
    const validationResult = this.validator.validate("jokeCreateDtoInType5", dtoIn);
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      Warnings.Create.UnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // prepare and return dtoOut
    const dtoOut = { ...dtoIn };
    //dtoOut.awid = awid;
    dtoOut.uuAppErrorMap = uuAppErrorMap;

    return dtoOut;
  }
}

module.exports = new JokeAbl();