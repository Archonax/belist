"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class BelistMainMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }
  async getByAwid(awid) {
    return await super.findOne({ awid });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async get(awid, id) {
    let filter = {
      awid: awid,
      id: id,
    };
    return await super.findOne(filter);
  }

  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }
  /*async list(awid, userId){
    let filter = { $and: [{awid},{$or: [{owner:userId},{members:userId}]}]}
    }
    return 
  */
  async remove(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id,
    };
    return await super.deleteOne(filter);
  }
  
  /*async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }*/

}

module.exports = BelistMainMongo;
/*"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;*/

/*class JokesMainMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1 }, { unique: true });
  }

  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async getByAwid(awid) {
    return await super.findOne({ awid });
  }
}

module.exports = JokesMainMongo;*/