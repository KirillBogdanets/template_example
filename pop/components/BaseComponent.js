const Component = require("template").Component;

class BaseComponent extends Component {

    constructor(alias, selector, isCollection, selectorType, text) {
        super(alias, selector, isCollection, selectorType, text);
    }
}

module.exports = BaseComponent;