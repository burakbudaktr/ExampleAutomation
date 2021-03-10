package com.computers.step_definitions;

import com.computers.PageFactory.BasePage;
import com.computers.PageFactory.ComputerCreationPage;
import com.computers.utilities.ConfigurationReader;
import com.computers.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class CreateComputer {


     BasePage basePage=new BasePage();
     ComputerCreationPage computerCreationPage=new ComputerCreationPage();

     @Given("The user navigates Computer Data Base Page")
     public void the_user_navigates_Computer_Data_Base_Page() {
         Driver.get().get(ConfigurationReader.get("url"));
     }

     @When("The user clicks the Add a new computer button")
     public void the_user_clicks_the_Add_a_new_computer_button() {
       basePage.addNewComputerButton.click();
     }

     @When("The user enters {string} to computer name input box")
     public void the_user_enters_to_computer_name_input_box(String computerName) {
         computerCreationPage.computerName.sendKeys(computerName);

     }

     @When("The user enters {string} to introduced date input box")
     public void the_user_enters_to_introduced_date_input_box(String introDate) {

         computerCreationPage.introducedDate.sendKeys(introDate);

     }

     @When("The user enters {string} to discontinued date input box")
     public void the_user_enters_to_discontinued_date_input_box(String discoDate) {

         computerCreationPage.discontinuedDate.sendKeys(discoDate);
     }

     @When("The user selects {string}")
     public void the_user_selects(String companyName) throws InterruptedException {
         computerCreationPage.selectCompany(companyName).click();

         Thread.sleep(2000);
     }

     @When("The user clicks the Create this computer button")
     public void the_user_clicks_the_Create_this_computer_button() {

          computerCreationPage.createNewComputerButton.click();

     }

     @Then("The warning message should be {string}")
     public void the_warning_message_should_be(String expectedMessage) throws InterruptedException {

             String actualMessage = basePage.warningMessage.getText();
             Assert.assertEquals(actualMessage, expectedMessage);

             Thread.sleep(2000);
     }



}
