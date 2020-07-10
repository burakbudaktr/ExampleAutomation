Feature: Computers

@create
Scenario Outline: Creating a new computer
    Given The user navigates Computer Data Base Page
    When The user clicks the Add a new computer button
    And The user enters "<ComputerName>" to computer name input box
    And The user enters "<introduced date>" to introduced date input box
    And The user enters "<discontinued date>" to discontinued date input box
    And The user selects "<company name>"
    And The user clicks the Create this computer button
    Then The warning message should be "Done!"

    Examples: Computers
      | ComputerName     | introduced date    | discontinued date    | company name  |
      | IdeaPad          | 2017-01-01         |      2018-01-01      | Lenovo Group  |
      | TouchPad         | 2018-01-01         |      2019-01-01      |    ASUS       |
      | MacBook1983      | 2019-01-01         |      2020-01-01      |  Apple Inc.   |




