var testCommands = {
    // TESTING FOR A VALID INPUT IN THE SEARCH
    searchInput: function(data) {
        this
        // testing with the ENTER key
            .waitForElementVisible('@pageContent')
            .setValue('@searchInput', [data.search, this.api.Keys.ENTER])
            .waitForElementVisible('@searchResult')
            .verify.containsText('@searchResult', 'DevMountain')
            .api.back()
        this
        // testing the search button
            .setValue('@searchInput', (data.search))
            .click('@searchInputButton')
            .waitForElementVisible('@searchResult')
            .verify.containsText('@searchResult', 'DevMountain')
            .api.back()
        return this
    },
    // TESTING FOR AN INVALID INPUT IN THE SEARCH
    searchInvalidInput: function(data){
        this
            .waitForElementVisible('@pageContent')
            .setValue('@searchInput', [data.invalidSearch, this.api.Keys.ENTER])
            .waitForElementVisible('@searchResult')
            .verify.containsText('@noSearchResult', 'There were no results matching the query.')
        return this

    }
}

module.exports = {
    url: 'https://en.wikipedia.org/wiki/Main_Page',
    commands: [testCommands],
    elements: {
        //PAGE LAYOUT SELECTOR
        pageContent: '#content',
        //SEARCH SELECTORS
        searchInput: '[name="search"]',
        searchResult: '#firstHeading',
        noSearchResult: '.mw-search-nonefound',
        searchInputButton: '[name="go"]'
    }
}