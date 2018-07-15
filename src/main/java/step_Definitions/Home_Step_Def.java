package step_Definitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Home_Step_Def 
{
	WebDriver driver;
	
	

@Given("^User is already on Home page$")
public void user_is_already_on_Home_page() {
	System.setProperty("webdriver.firefox.marionette", "G:/geckoDriver/geckodriver-v0.19.1-win64/geckodriver.exe");
	driver= new FirefoxDriver();
	driver.get("http://demo.automationtesting.in/Index.html");
	
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	driver.manage().deleteAllCookies();
	
 
}

@When("^User is able to see SignIn button$")
public void user_is_able_to_see_SignIn_button() {
   String button=driver.findElement(By.cssSelector("button#btn1")).getText();
   Assert.assertEquals("Sign In", button);
}

@Then("^Enter EmailID for SignUP$")
public void enter_EmailID_for_SignUP() {
	
	driver.findElement(By.cssSelector("input#email")).sendKeys("abcdef@gmail.com");
	driver.findElement(By.cssSelector("img#enterimg")).click();
	
	
}

@Then("^Verify User is on Registration page$")
public void verify_User_is_on_Registration_page() {
	
	String title=driver.getTitle();
	//Assert.assertEquals("Register", title);
}

//Reg Exp:
////1. \"([^\"]*)\"
////2. \"(.*)\"

@Then("^User Enters \"(.*)\" and \"(.*)\"$")
public void User_Enters_FirstName_and_LastName(String FirstName, String LastName)  {
   driver.findElement(By.xpath("//*[@id='basicBootstrapForm']/div[1]/div[1]/input")).sendKeys(FirstName);
   driver.findElement(By.xpath("//*[@id='basicBootstrapForm']/div[1]/div[2]/input")).sendKeys(LastName);
   
   
}

@Then("^Submit Registration$")
public void submit_Registration()  {
	
    
}

}
