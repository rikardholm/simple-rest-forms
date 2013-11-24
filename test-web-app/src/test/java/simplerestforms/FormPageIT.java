package simplerestforms;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class FormPageIT {

    @Test
    public void the_page_should_load() throws Exception {
        System.setProperty("webdriver.chrome.driver","./chromedriver");

        WebDriver webDriver = new ChromeDriver();
        webDriver.get("http://localhost:8080");

    }

    public void testName() throws Exception {

    }
}
