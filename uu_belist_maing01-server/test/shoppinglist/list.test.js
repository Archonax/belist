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
describe("Testing the list uuCmd...", () => {
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
    let dtoIn3 = {
        "name":"test name a",
        "text":"TEST TEXT a",
        "categoryIdList":["615d7540917ec500271203c2","615d7540917ec500271203c1"]
    };
    
    let result3 = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn3, session);
    //let listid =  result2.id;
    let dtoIn = {
  
        "sortBy": "name",
        "order": "asc",
        "categoryIdList":["615d7540917ec500271203c1"],
        "pageInfo":{
            
        "pageIndex": 0,
        "pageSize": 20
        }
    }
    let result = await TestHelper.executeGetCommand("shoppinglist/menu/", dtoIn, session);
    expect(result.status).toEqual(200);
    expect(result.itemList).toBeDefined();
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
    let dtoIn3 = {
        "name":"test name a",
        "text":"TEST TEXT a",
        "categoryIdList":["615d7540917ec500271203c2","615d7540917ec500271203c1"]
    };
    
    let result3 = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn3, session);
    //let listid =  result2.id;
    let dtoIn = {
        "gkfdjglfkgjdflgkdglkfjdgd":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    }
    try{
        let result = await TestHelper.executeGetCommand("shoppinglist/menu/", dtoIn, session);
    }catch(e){
        expect(e.status).toEqual(400);
        expect(e.message).toBeDefined();
        expect(e.code).toEqual("uu-belist-main/joke/list/invalidDtoIn");
    }
    /*expect(result.status).toEqual(400);
    expect(result.data.uuAppErrorMap).toBeDefined();*/
  });
  test("bad category", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);
    let dtoIn2 = {
        "name":"test name",
        "text":"TEST TEXT",
        "categoryIdList":["615d7540917ec500271203c0","615d7540917ec500271203c1"]
    };
    
    let result2 = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn2, session);
    let dtoIn3 = {
        "name":"test name a",
        "text":"TEST TEXT a",
        "categoryIdList":["615d7540917ec500271203c2","615d7540917ec500271203c1"]
    };
    
    let result3 = await TestHelper.executePostCommand("shoppinglist/create/", dtoIn3, session);
    //let listid =  result2.id;
    let dtoIn = {
  
        "sortBy": "name",
        "order": "asc",
        "categoryIdList":["333d7540917ec50033333333"],
        "pageInfo":{
            
        "pageIndex": 0,
        "pageSize": 20
        }
    }
    try{
        let result = await TestHelper.executeGetCommand("shoppinglist/menu/", dtoIn, session);
    }catch(e){
        expect(e.status).toEqual(400);
        expect(e.message).toBeDefined();
        expect(e.code).toEqual("uu-belist-main/joke/list/invalidDtoIn");
    }
    /*expect(result.status).toEqual(400);
    expect(result.data.uuAppErrorMap).toBeDefined();*/
  });
});
