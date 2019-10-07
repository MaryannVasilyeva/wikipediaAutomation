var wikipediaObject = {}
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
  'Testing the search': browser => {
     wikipediaObject
        .searchInput()

  },
  'Testing the account login': browser => {

  }
}