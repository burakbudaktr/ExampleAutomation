Feature: Computers
  @read
  Scenario: Reading computer from search results
    Given The user navigates Computer Data Base Page
    When The user enters "Berry" to the searching input box
    And The user clicks the Filter by name button
    Then The user verifies that all computer name in the results contains "Berry"