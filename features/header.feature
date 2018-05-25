@header
Feature: Header

    Background:
        Given I Disable protractor synchronization
        When I should be on "Home" page

    @smoke
    @ticket_01
    Scenario: Verify that user is able to see all necessary elements at the Header on Home Page
        Then Element "Header > Header Logo" should be visible
          And Element "Header > Services Button" should be visible
          And Element "Header > Our Work Button" should be visible
          And Element "Header > About Button" should be visible
          And Element "Header > News Button" should be visible
          And Element "Header > Contact Button" should be visible
          And Element "Header > Call Us Number" should be visible
          And Element "Header > Language Block" should be visible

    @smoke
    @ticket_02
    Scenario Outline: Verify that user is able to see all items in all dropdowns on the Header
        When I hover mouse over "Header > <Header Buttons>"
        Then Collection "Header > Dropdown Items" should be visible
          And Number of elements in "Header > Dropdown Items" collection should be equal to "<Number of Items>"
        
        Examples:
            | Number of Items    | Header Buttons     |
            | 6                  | Services Button    |
            | 6                  | Our Work Button    |
            | 4                  | About Button       |
            | 2                  | News Button        |
            
    @smoke
    @ticket_03
    Scenario: Verify that default language is English at the Header on Home Page
        Then Text of "Header > Language Block > Selected Language" element should be equal to "English" ignoring case
        When I click "Header > Language Block" element
        Then Collection "Header > Language Block > Languages" should be present
          And Number of elements in "Header > Language Block > Languages" collection should be equal to "3"