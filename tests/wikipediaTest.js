var wikipediaObject = {}
var data = require('../testAssets/wikipediaData')

module.exports = {
  before: browser => {
      wikipediaObject = browser.page.wikipedia()
      wikipediaObject.navigate()
  },  
  'Testing the navbar': browser => {
    wikipediaObject
        .navBar(data)
  },
  'Testing the search': browser => {
    wikipediaObject 
        .searchInput(data)
        .searchInvalidInput(data)
  },
  'Testing the account login': browser => {

  }
}