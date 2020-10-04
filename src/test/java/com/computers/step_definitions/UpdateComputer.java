package com.computers.step_definitions;

import com.computers.PageFactory.BasePage;
import com.computers.PageFactory.ComputerCreationPage;
import io.cucumber.java.en.When;

public class UpdateComputer {
    BasePage basePage=new BasePage();
    ComputerCreationPage computerCreationPage=new ComputerCreationPage();

    @When("The user enters {string} to computer name to search input box")
    public void the_user_enters_to_computer_name_to_search_input_box(String computerName) {
       basePage.searchBox.sendKeys(computerName);
    }

    @When("The user clicks the Filter by name button")
    public void the_user_clicks_the_Filter_by_name_button() {
      basePage.filterByNameButton.click();
    }

    @When("The user clicks the the computer in the result")
    public void the_user_clicks_the_the_computer_in_the_result() {
       basePage.createdComputerName.click();
    }

    @When("The user clicks the Save this computer button")
    public void the_user_clicks_the_Save_this_computer_button() {
      computerCreationPage.saveThisComputerButton.click();
    }


    @When("The user clears the computer name")
    public void the_user_clears_the_computer_name() {
       computerCreationPage.computerName.clear();
    }



}
