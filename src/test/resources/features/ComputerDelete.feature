Feature: Computer delete

@delete
Scenario Outline: Deleting  a computer
Given The user navigates Computer Data Base Page
When The user enters "<UpdatedComputerName>" to computer name to search input box
And The user clicks the Filter by name button
And The user clicks the the computer in the result
And The user clicks the Delete this computer button
Then The warning message should be "Done!"

Examples: Delete a computer
|   UpdatedComputerName     |
|   IdeaPadPro              |
|   TouchPadPro             |
|   MacBook1983Pro          |



