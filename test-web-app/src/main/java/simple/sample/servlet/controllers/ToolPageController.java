package simple.sample.servlet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("tools")
public class ToolPageController {

    @RequestMapping(method = RequestMethod.GET)
    public void get() {
    }

}
