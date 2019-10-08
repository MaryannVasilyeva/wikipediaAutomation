var wikipediaObject = {}
var data = require('../testAssets/wikipediaData')

module.exports = {
  before: browser => {
      wikipediaObject = browser.page.wikipedia()
      wikipediaObject.navigate()
  },  
  'Testing the navbar': browser => {

  },
  'Testing the search': browser => {
    wikipediaObject 
    //testing for valid and invalid data...
        .searchInput(data)
        .searchInvalidInput(data)

  },
  'Testing the account login': browser => {

  }
}