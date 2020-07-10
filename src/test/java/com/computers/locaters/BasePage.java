package com.computers.locaters;

import com.computers.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasePage {

    public BasePage() {
        PageFactory.initElements(Driver.get(), this);

    }

    @FindBy(id="add")
    public WebElement addNewComputerButton;


    @FindBy(xpath = "//strong[contains(text(),'Done!')]")
    public WebElement warningMessage;

    @FindBy(xpath = "//table/tbody/tr[1]/td[1]/a")
    public WebElement createdComputerName;

    @FindBy(id="searchbox")
    public WebElement searchBox;

    @FindBy(id="searchsubmit")
    public WebElement filterByNameButton;
}
