Feature: Bootcamp E2E

  Background:
    Given the home page is open
    When I close the promotional banner in case of its appearance

  Scenario: Search bar

    When I enter 'Windows' in the search bar
    And I click on the search button
    Then I should see at least one respective item

  Scenario: Internet shop logo button

    When I open "Today's Best Deals" tab
    And I click on the Newegg logo
    Then I should see the home page