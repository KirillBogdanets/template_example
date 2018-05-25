const BaseComponent = require("../BaseComponent");

class Header extends BaseComponent {

    constructor(alias = "Header", selector = "header#main-header", isCollection = false) {
        super(alias, selector, isCollection);

        this.defineComponent("Language Block", new LanguageBlock());

        this.defineElement("Header Logo", ".large");
        this.defineElement("Services Button", "#mega-menu-item-176024");
        this.defineElement("Our Work Button", "#mega-menu-item-176030");
        this.defineElement("About Button", "#mega-menu-item-176037");
        this.defineElement("News Button", "#mega-menu-item-179671");
        this.defineElement("Contact Button", ".cta-contact-us");
        this.defineElement("Call Us Number", ".phone-number");
        this.defineCollection("Dropdown Items", ".mega-toggle-on .mega-sub-menu .mega-menu-link")
    }
}

class LanguageBlock extends BaseComponent {

    constructor(alias = "Language Block", selector = ".langs-switcher", isCollection = false) {
        super(alias, selector, isCollection);

        this.defineElement("Selected Language", "#lang-selected");
        this.defineCollection("Languages", "#langs .lang");
    }
}

module.exports = Header;