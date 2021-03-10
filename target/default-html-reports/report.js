$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ComputerCreation.feature");
formatter.feature({
  "name": "Computers",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Creating a new computer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@create"
    }
  ]
});
formatter.step({
  "name": "The user navigates Computer Data Base Page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user clicks the Add a new computer button",
  "keyword": "When "
});
formatter.step({
  "name": "The user enters \"\u003cComputerName\u003e\" to computer name input box",
  "keyword": "And "
});
formatter.step({
  "name": "The user enters \"\u003cintroduced date\u003e\" to introduced date input box",
  "keyword": "And "
});
formatter.step({
  "name": "The user enters \"\u003cdiscontinued date\u003e\" to discontinued date input box",
  "keyword": "And "
});
formatter.step({
  "name": "The user selects \"\u003ccompany name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "The user clicks the Create this computer button",
  "keyword": "And "
});
formatter.step({
  "name": "The warning message should be \"Done!\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Computers",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ComputerName",
        "introduced date",
        "discontinued date",
        "company name"
      ]
    },
    {
      "cells": [
        "IdeaPad",
        "2017-01-01",
        "2018-01-01",
        "Lenovo Group"
      ]
    },
    {
      "cells": [
        "TouchPad",
        "2018-01-01",
        "2019-01-01",
        "ASUS"
      ]
    },
    {
      "cells": [
        "MacBook1983",
        "2019-01-01",
        "2020-01-01",
        "Apple Inc."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Creating a new computer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@create"
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
  "name": "The user clicks the Add a new computer button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateComputer.the_user_clicks_the_Add_a_new_computer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"IdeaPad\" to computer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_computer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"2017-01-01\" to introduced date input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_introduced_date_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"2018-01-01\" to discontinued date input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_discontinued_date_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects \"Lenovo Group\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the Create this computer button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_clicks_the_Create_this_computer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The warning message should be \"Done!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateComputer.the_warning_message_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating a new computer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@create"
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
  "name": "The user clicks the Add a new computer button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateComputer.the_user_clicks_the_Add_a_new_computer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"TouchPad\" to computer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_computer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"2018-01-01\" to introduced date input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_introduced_date_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"2019-01-01\" to discontinued date input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_discontinued_date_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects \"ASUS\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the Create this computer button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_clicks_the_Create_this_computer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The warning message should be \"Done!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateComputer.the_warning_message_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating a new computer",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@create"
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
  "name": "The user clicks the Add a new computer button",
  "keyword": "When "
});
formatter.match({
  "location": "CreateComputer.the_user_clicks_the_Add_a_new_computer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"MacBook1983\" to computer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_computer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"2019-01-01\" to introduced date input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_introduced_date_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"2020-01-01\" to discontinued date input box",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_enters_to_discontinued_date_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user selects \"Apple Inc.\"",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_selects(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the Create this computer button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateComputer.the_user_clicks_the_Create_this_computer_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The warning message should be \"Done!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateComputer.the_warning_message_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});