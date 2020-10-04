package com.computers.step_definitions;

import com.computers.PageFactory.ComputerCreationPage;
import io.cucumber.java.en.When;

public class DeleteComputer {

    ComputerCreationPage computerCreationPage=new ComputerCreationPage();

    @When("The user clicks the Delete this computer button")
    public void the_user_clicks_the_Delete_this_computer_button() {
        computerCreationPage.deleteThisComputerButton.click();
    }
}
