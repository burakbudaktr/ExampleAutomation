Feature: Computer update

@update
Scenario Outline: Updating a computer
Given The user navigates Computer Data Base Page
When The user enters "<ComputerName>" to computer name to search input box
And The user clicks the Filter by name button
And The user clicks the the computer in the result
And The user clears the computer name
And The user enters "<UpdatedComputerName>" to computer name input box
And The user clicks the Save this computer button
Then The warning message should be "Done!"

Examples: Updated Computers
|ComputerName|   UpdatedComputerName     |
|IdeaPad     |   IdeaPadPro              |
| TouchPad   |   TouchPadPro             |
| MacBook1983|   MacBook1983Pro          |
