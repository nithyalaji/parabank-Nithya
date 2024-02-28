const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
  url: "https://parabank.parasoft.com/parabank/register.htm",
  Parabank: "https://parabank.parasoft.com/parabank/register.htm",

  elements: {
    RegisterButton: '//input[@value="Register"]',
    Login: '//input[@value="Log In"]',
    FirstName: "//input[@id='customer.firstName']",
    LastName: '//input[@id="customer.lastName"]',
    Address: '//input[@id="customer.address.street"]',
    City: '//input[@id="customer.address.city"]',
    State: '//input[@id="customer.address.state"]',
    ZipCode: '//input[@id="customer.address.zipCode"]',
    Phone: '//input[@id="customer.phoneNumber"]',
    SSN: '//input[@id="customer.ssn"]',
    username: '//input[@id="customer.username"]',
    password: '//input[@id="customer.password"]',
    confirm: '//input[@id="repeatedPassword"]',
    WelcomeMessage: '//*[@id="rightPanel"]/h1',
    AccountCreatedMessage: '//*[@id="rightPanel"]/p',
    customerusername: '//input[@name="username"]',
    customerpassword: '//input[@name="password"]',
    AccountoverviewHeader: '//*[@id="rightPanel"]/div/div/h1',
    Forgotlogininfo: '//*[@id="loginPanel"]/p[1]/a',
    CustomerlookupHeader: '//*[@id="rightPanel"]/h1',
  },

  clickElement: async function (objectKey) {
    // eslint-disable-next-line no-console
    console.log(objectKey);
    var selector = this.elements[objectKey];
    await driver.sleep(2000);
    return driver.findElement(By.xpath(selector)).click();
  },

  inputElement: async function (inputname, inputvalue) {
    // username or password
    const selector = this.elements[inputname];
    await driver.sleep(3000);
    return driver.findElement(By.xpath(selector)).sendKeys(inputvalue);
  },

  elementExists: async function (objectKey) {
    // eslint-disable-next-line no-console
    var selector = page.testpara.elements[objectKey];

    await driver.sleep(5000);
    return driver.findElement(By.xpath(selector));
  },
};
