var wikipediaObject = {}
var data = require('../testAssets/wikipediaData')

module.exports = {
  beforeEach: browser => {
      wikipediaObject = browser.page.wikipedia()
      wikipediaObject.navigate()
  },  
  after: browser => {
      wikipediaObject.end()
  },
  'Testing the navbar': browser => {
      wikipediaObject
        .navBar(navbarData)
  },
  'Testing the search': browser => {
    wikipediaObject 
        .searchInput(searchData)
        .searchInvalidInput(searchData)
  },
}