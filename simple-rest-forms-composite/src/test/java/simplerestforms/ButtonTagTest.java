package simplerestforms;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import org.hamcrest.MatcherAssert;
import org.testng.annotations.Test;

import static org.hamcrest.core.IsEqual.equalTo;

public class ButtonTagTest {
    @Test(enabled = false)
    public void should_not_post_form_if_javascript_is_not_enabled() throws Exception {
        WebClient webClient = new WebClient();
        HtmlPage htmlPage = webClient.getPage("http://localhost:8081/nojs");
        MatcherAssert.assertThat(htmlPage.getElementsByTagName("h1").get(0).asText(), equalTo("Asdf"));
        webClient.closeAllWindows();
    }
}
