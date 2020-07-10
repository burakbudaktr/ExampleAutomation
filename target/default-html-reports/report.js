$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ComputerRead.feature");
formatter.feature({
  "name": "Computers",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Reading computer from search results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@read"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user navigates Computer Data Base Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateComputer.the_user_navigates_Computer_Data_Base_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"Berry\" to the searching input box",
  "keyword": "When "
});
formatter.match({
  "location": "ReadComputers.the_user_enters_to_the_searching_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the Filter by name button",
  "keyword": "And "
});
formatter.match({
  "location": "UpdateComputer.the_user_clicks_the_Filter_by_name_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user verifies that all computer name in the results contains \"Berry\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ReadComputers.the_user_verifies_that_all_computer_name_in_the_results_contains(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});