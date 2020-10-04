package com.computers.step_definitions;

import com.computers.PageFactory.BasePage;
import com.computers.PageFactory.ComputerCreationPage;
import com.computers.utilities.ConfigurationReader;
import com.computers.utilities.Driver;
import io.cucumber.java.Transpose;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.List;
import java.util.Set;

public class defra {
    @Given("I am on the app galalry")
    public void i_am_on_the_app_galalry() throws InterruptedException {
      Driver.get().get("https://environment-test.data.gov.uk");
      String currentHandle=Driver.get().getWindowHandle();
      String lastHandle="";
      Driver.get().findElement(By.xpath("//a[@id='nav-link-gallery']")).click();
      Thread.sleep(2000);
      Driver.get().findElement(By.xpath(" //a[@id='waste-carriers,-brokers-and-dealers-widget-api-link']")).click();
        Thread.sleep(2000);
        Set<String> handles=Driver.get().getWindowHandles();
        for(int i=0; i<handles.size(); i++){
            System.out.println(handles.toString());
        }

        for(String value: handles){
            if(value!=currentHandle){
                Driver.get().switchTo().window(value);
            }
        }

        lastHandle=Driver.get().getWindowHandle();
        System.out.println(lastHandle);


    }

    @When("I selected api for waste carier")
    public void i_selected_api_for_waste_carier() {


    }

    @Then("new tab opened and the api page for waste carier")
    public void new_tab_opened_and_the_api_page_for_waste_carier() {


    }


}
