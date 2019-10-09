var wikipediaObject = {}
require('../testAssets/wikipediaData')

module.exports = {
  beforeEach: browser => {
      wikipediaObject = browser.page.wikipediaEW()
      wikipediaObject.navigate()
  },  
  after: browser => {
      wikipediaObject.end()
  },
  'Testing the navbar': browser => {

  },
  'Testing the account login': browser => {
    wikipediaObject
    //moved the mock data into the testAssets/wikipediaData.js
        .accountLogin(accountData)

  }
}