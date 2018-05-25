const AbstractPageMap = require("template").AbstractPageMap;
const HomePage = require("./pages/HomePage");

class PageMap extends AbstractPageMap {

    constructor() {
        super();
        const baseUrl = browser.baseUrl;

        this.definePage("Home", `${browser.params.envData.baseUrl}`, new HomePage());
    }
}

module.exports = PageMap;