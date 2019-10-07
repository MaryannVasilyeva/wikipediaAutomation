var testCommands = {
    searchInput: function(search) {
        this
            .waitForElementVisible('@pageContent')
        return this
    }
}

module.exports = {
    url: 'https://en.wikipedia.org/wiki/Main_Page',
    commands: [testCommands],
    elements: {
        //SEARCH
        pageContent: '#content',
        searchInput: '[name="search"]'
    }
}