Feature: Computers
  @read
  Scenario: Searching a computer
    Given The user navigates Computer Data Base Page
    When The user types "Berry" to the searching input box
    And The user clicks the Filter by name button
    Then The user verifies that all computer name in the results contains "Berry"