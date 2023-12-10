const { TestHelper } = require("uu_appg01_server-test");

beforeEach(async () => {
  await TestHelper.setup();
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
  await TestHelper.initUuAppWorkspace({ uuAppProfileAuthorities: "urn:uu:GGALL" });
});

afterEach(async () => {
  await TestHelper.teardown();
});
//HW 5: USE THE ABOVE AS BEFOREEACH AND AFTEREACH
describe("Testing the update uuCmd...", () => {
  /*test("sample", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);

    let dtoIn = {};
    let result = await TestHelper.executeGetCommand("sys/uuAppWorkspace/load", dtoIn, session);
    //in HDS test for list, can call create - must call to have data for list and get 
    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });*/
  test("HDS", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);
    let dtoIn2 = {
        "name":"test name",
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1"]
    };
    
    let result2 = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn2, session);
    let listid =  result2.id;
    let dtoIn = {
        "id":listid,
        "visibility":false
    }
    let result = await TestHelper.executePostCommand("shoppinglist/archive/", dtoIn, session);
    expect(result.status).toEqual(200);
    expect(result.visibility).toEqual(dtoIn.visibility);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
  test("invalid dtoIn", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);
    let dtoIn2 = {
        "name":"test name",
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1"]
    };
    
    let result2 = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn2, session);
    //let listid =  result2.id;
    let dtoIn = {
        "gkfdjglfkgjdflgkdglkfjdgd":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    }
    try{
        let result = await TestHelper.executePostCommand("shoppinglist/archive/", dtoIn, session);
    }catch(e){
        expect(e.status).toEqual(400);
        expect(e.message).toBeDefined();
        expect(e.code).toEqual("uu-belist-main/joke/update/invalidDtoIn");
    }
    /*expect(result.status).toEqual(400);
    expect(result.data.uuAppErrorMap).toBeDefined();*/
  });
  test("does not exist", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);
    let dtoIn2 = {
        "name":"test name",
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1"]
    };
    
    let result2 = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn2, session);
    //let listid =  result2.id;
    let dtoIn = {
        "id":"656126cde281621111111111",
        "visibility":false
    }
    try{
        let result = await TestHelper.executePostCommand("shoppinglist/archive/", dtoIn, session);
    }catch(e){
        expect(e.status).toEqual(400);
        expect(e.message).toBeDefined();
        expect(e.code).toEqual("uu-belist-main/joke/update/jokeDoesNotExist");
    }
    /*expect(result.status).toEqual(400);
    expect(result.data.uuAppErrorMap).toBeDefined();*/
  });
  test("user is not owner", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);
    let dtoIn2 = {
        "name":"test name",
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1"]
    };
    
    let result2 = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn2, session);
    let listid =  result2.id;
    let dtoIn = {
        "id":listid,
        "visibility":false
    }
    let session2 = await TestHelper.login("Bad", false, false);
    try{
      let result = await TestHelper.executePostCommand("shoppinglist/archive/", dtoIn, session2);
  }catch(e){
      expect(e.status).toEqual(400);
      expect(e.message).toBeDefined();
      expect(e.code).toEqual("uu-belist-main/joke/update/userNotAuthorized");
  }
  });
});
