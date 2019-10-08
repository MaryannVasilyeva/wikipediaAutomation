var wikipediaObject = {}
var data = require('../testAssets/wikipediaData')
var myData = {
    login: 'Ewilhelm1125',
    password: 'testme123'
}
module.exports = {
  beforeEach: browser => {
      wikipediaObject = browser.page.wikipedia()
      wikipediaObject.navigate()
  },  
  after: browser => {
      wikipediaObject.end()
  },
  'Testing the navbar': browser => {

  },
  'Testing the account login': browser => {
    wikipediaObject
        .accountLogin(myData)

  }
}