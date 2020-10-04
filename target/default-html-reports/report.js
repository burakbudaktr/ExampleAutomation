$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ComputerCreation.feature");
formatter.feature({
  "name": "Computers",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Navigation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@defra"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the app galalry",
  "keyword": "Given "
});
formatter.match({
  "location": "defra.i_am_on_the_app_galalry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I selected api for waste carier",
  "keyword": "When "
});
formatter.match({
  "location": "defra.i_selected_api_for_waste_carier()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "new tab opened and the api page for waste carier",
  "keyword": "Then "
});
formatter.match({
  "location": "defra.new_tab_opened_and_the_api_page_for_waste_carier()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});