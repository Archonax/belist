"use strict";
const BelistMainUseCaseError = require("./belist-main-use-case-error.js");
const BELIST_MAIN_ERROR_PREFIX = `${BelistMainUseCaseError.ERROR_PREFIX}belistMain/`;

const Init = {
  UC_CODE: `${BELIST_MAIN_ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends BelistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends BelistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SetProfileFailed: class extends BelistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  },

  BelistDaoCreateFailed: class extends BelistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}belistDaoCreateFailed`;
      this.message = "Create list by DAO method failed.";
    }
  },
};

const Load = {
  UC_CODE: `${BELIST_MAIN_ERROR_PREFIX}load/`,

  BelistMainDoesNotExist: class extends BelistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Load.UC_CODE}belistMainDoesNotExist`;
      this.message = "UuObject belistMain does not exist.";
    }
  },
};

module.exports = {
  Init,
  Load,
};