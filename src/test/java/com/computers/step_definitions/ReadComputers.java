package com.computers.step_definitions;

import com.computers.PageFactory.BasePage;
import com.computers.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ReadComputers {

    BasePage basePage=new BasePage();
    @When("The user enters {string} to the searching input box")
    public void the_user_enters_to_the_searching_input_box(String str) throws InterruptedException {

      basePage.searchBox.sendKeys(str);

    Thread.sleep(2000);

    }

    @Then("The user verifies that all computer name in the results contains {string}")
    public void the_user_verifies_that_all_computer_name_in_the_results_contains(String string) throws InterruptedException {

        List<WebElement> computerElements= Driver.get().findElements(By.xpath("//table/tbody/tr/td[1]"));

         for(WebElement a: computerElements){
         Assert.assertTrue(a.getText().contains("Berry"));
               }

        Thread.sleep(2000);

    }

}
