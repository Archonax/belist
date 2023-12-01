

/*FOR NOW THE CATEGORY REPRESENTS ITEM - A SIMILAR OBJECT FOR USER DATA WITH UUIDENTITY INSTEAD OF ID TO BE USED*/ 

"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;
const { ObjectId } = require("bson");

class CategoryMongo extends UuObjectDao {
  constructor(...args) {
    super(...args);
  }

  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
    await super.createIndex({ awid: 1, name: 1 }, { unique: true });
  }
  
  // create DAO method
  async create(uuObject) {
    if (uuObject.categoryIdList) {
      uuObject.categoryIdList = uuObject.categoryIdList.map((categoryId) => new ObjectId(categoryId));
    }
    return await super.insertOne(uuObject);
  }
  // get DAO method
  async get(awid, id) {
    return await super.findOne({ id, awid });
  }
  // getByName DAO method
  
  // update DAO method
  async update(uuObject) {
    if (uuObject.categoryIdList) {
      uuObject.categoryIdList = uuObject.categoryIdList.map((categoryId) => new ObjectId(categoryId));
    }
    let filter = { id: uuObject.id, awid: uuObject.awid };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }
  // delete DAO method
  async delete(awid, id) {
    await super.deleteOne({ awid, id });
  }
  
  async list(awid, order, pageInfo) {
    const filter = { awid };
    const sort = { name: order === "asc" ? 1 : -1 };

    return await super.find(filter, pageInfo, sort);
  }
  async listByIdList(awid, categoryIdList) {
    const filter = {
      awid,
      _id: {
        $in: categoryIdList.map((id) => new ObjectId(id)),
      },
    };
  
    return await super.find(filter);
  }
}

module.exports = CategoryMongo;