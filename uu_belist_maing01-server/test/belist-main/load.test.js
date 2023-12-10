const { TestHelper } = require("uu_appg01_server-test");

beforeAll(async () => {
  await TestHelper.setup();
  await TestHelper.initUuSubAppInstance();
  await TestHelper.createUuAppWorkspace();
  await TestHelper.initUuAppWorkspace({ uuAppProfileAuthorities: "urn:uu:GGALL" });
});

afterAll(async () => {
  await TestHelper.teardown();
});
//HW 5: USE THE ABOVE AS BEFOREEACH AND AFTEREACH
describe("Testing the load uuCmd...", () => {
  test("HDS", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);

    let dtoIn = {};
    let result = await TestHelper.executeGetCommand("sys/uuAppWorkspace/load", dtoIn, session);
    //in HDS test for list, can call create - must call to have data for list and get 
    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toBeDefined();
  });
  /*test("A1 - not implemented yet", async () => {
    let session = await TestHelper.login("AwidLicenseOwner", false, false);

    let dtoIn = {};
    let result = await TestHelper.executeGetCommand("sys/uuAppWorkspace/load", dtoIn, session);
    //in HDS test for list, can call create - must call to have data for list and get 
    expect(result.status).toEqual(200);
    expect(result.data.uuAppErrorMap).toBeDefined();
  }); THIS IS JUST CODING NOTES*/
});
