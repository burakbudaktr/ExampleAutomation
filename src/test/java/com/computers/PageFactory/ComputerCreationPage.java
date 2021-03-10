package com.computers.PageFactory;

import com.computers.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerCreationPage {

    public ComputerCreationPage() {
        PageFactory.initElements(Driver.get(), this);

    }

    @FindBy(id="name")
    public WebElement computerName;

    @FindBy(id="introduced")
    public WebElement introducedDate;

    @FindBy (id="discontinued")
    public WebElement discontinuedDate;

    @FindBy(xpath = "//input[@value='Create this computer']")
    public WebElement createNewComputerButton;

    @FindBy(xpath = "//input[@value='Save this computer']")
    public WebElement saveThisComputerButton;

    @FindBy(xpath = "//input[@value='Delete this computer']")
    public WebElement deleteThisComputerButton;

    public WebElement selectCompany(String companyName){
        String xpath = "//option[contains(text(),'"+companyName+"')]";
        return Driver.get().findElement(By.xpath(xpath));
    }

}
