module.exports = function () {
  this.Given("I am on the Parabank portal", function () {
    return helpers.loadPage(page.testpara.url);
  });
  this.Given(/^I am on the "([^"]*)" portal$/, function (objectKey) {
    console.log("The objectKey is: " + page.testpara[objectKey]);
    // Write code here that turns the phrase above into concrete actions
    return helpers.loadPage(page.testpara[objectKey]);
  });

  this.When(/^I enter inputs to Register$/, async function (table) {
    const fields = table.rows();
    for (var i = 0; i < fields.length; i++) {
      page.testpara.inputElement(fields[i][0], fields[i][1]);
    }
    await driver.sleep(3000);
    return;
  });

  this.When(/^I click on "([^"]*)" Button$/, async function (objectKey) {
    // VehiclesButton, InventoryLink, LoginButton
    //console.log("objectKey:" + objectKey);
    return page.testpara.clickElement(objectKey);
  });

  this.When(
    /^I give "([^"]*)" as "([^"]*)"$/,
    function (inputname, inputvalue) {
      return page.testpara.inputElement(inputname, inputvalue);
    }
  );

  this.Then(/^I should see the "([^"]*)"$/, function (objectKey) {
    console.log("The objectKey in commonsteps is: " + objectKey);
    return page.testpara.elementExists(objectKey);
  });
};
