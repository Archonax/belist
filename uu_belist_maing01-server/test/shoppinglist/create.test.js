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
describe("Testing the create uuCmd...", () => {
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

    let dtoIn = {
        "name":"test name",
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1"]
    };
    let result = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn, session);
    //console.log(result);
    expect(result.status).toEqual(200);
    expect(result.name).toEqual("test name");
    expect(result.text).toEqual("TEST TEXT");
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
  test("invalid dtoIn", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);

    let dtoIn = {
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1"]
    };
    //let result = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn, session);

    try{
        let result = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn, session);
    }catch(e){
        expect(e.status).toEqual(400);
        expect(e.message).toBeDefined();
        expect(e.code).toEqual("uu-belist-main/joke/create/invalidDtoIn");
    }
    /*expect(result.status).toEqual(400);
    expect(result.data.uuAppErrorMap).toBeDefined();*/
  });
  test("invalid item id", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);

    let dtoIn = {
        "name":"test name",
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1","jkdsgkfhewukrhweriwehifsdu324324234"] //last item does not exist
    };
    //let result = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn, session);

    try{
        let result = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn, session);
    }catch(e){
        expect(e.status).toEqual(400);
        expect(e.message).toBeDefined();
        expect(e.code).toEqual("uu-belist-main/joke/create/invalidDtoIn");
    }
    /*expect(result.status).toEqual(400);
    expect(result.data.uuAppErrorMap).toBeDefined();*/
  });
  /*test("bad profile", async () => {
    let session = await TestHelper.login("Bad"); //this is not one of the profiles used in the app

    let dtoIn = {
        "name":"test name",
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1"]
    };
    let result = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn, session);

    expect(result.status).toEqual(200);
    expect(result.name).toEqual("test name");
    expect(result.text).toEqual("TEST TEXT");
    expect(result.data.uuAppErrorMap).toBeDefined();
  });*/
});
