const AbstractPage = require("template").AbstractPage;
const Header = require("../components/global/Header");

class BasePage extends AbstractPage {

    constructor() {
        super();
        
        this.defineComponent("Header", new Header());
    }
}

module.exports = BasePage;