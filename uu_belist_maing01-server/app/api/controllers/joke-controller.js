"use strict";
const JokeAbl = require("../../abl/joke-abl.js"); //OUTDATED
const ListAbl = require("../../abl/joke/list-abl");
const GetAbl = require("../../abl/joke/get-abl");
const CreateAbl = require("../../abl/joke/create-abl");
const UpdateAbl = require("../../abl/joke/update-abl");
const DeleteAbl = require("../../abl/joke/delete-abl");
const AdditemAbl = require("../../abl/joke/additem-abl");
class JokeController {
  /*OUTDATEDcreate(ucEnv) {
    const awid = ucEnv.getUri().getAwid();
    const dtoIn = ucEnv.parameters;
    return JokeAbl.create(awid, dtoIn);
  }*/
  /*static*/ list(ucEnv) {
    return ListAbl.list(ucEnv.getUri().getAwid(), ucEnv.parameters, ucEnv.getAuthorizationResult());
  }
  /*static*/ get(ucEnv) {
    return GetAbl.get(ucEnv.getUri().getAwid(), ucEnv.parameters, ucEnv.getAuthorizationResult());
  }
  /*static*/ create(ucEnv) {
    return CreateAbl.create(ucEnv.getUri().getAwid(), ucEnv.parameters, ucEnv.session, ucEnv.getAuthorizationResult());
  }
  /*static*/ update(ucEnv) {
    return UpdateAbl.update(ucEnv.getUri().getAwid(), ucEnv.parameters, ucEnv.session, ucEnv.getAuthorizationResult());
  }
  /*static*/ delete(ucEnv) {
    return DeleteAbl.delete(ucEnv.getUri().getAwid(), ucEnv.parameters, ucEnv.session, ucEnv.getAuthorizationResult());
  }
  /*static*/ additem(ucEnv) {
    return AdditemAbl.update(ucEnv.getUri().getAwid(), ucEnv.parameters, ucEnv.session, ucEnv.getAuthorizationResult());
  }
}

module.exports = new JokeController();//getUuIdentity for user ID