package simple.sample.servlet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("help")
public class EventController {

    @RequestMapping(method = GET)
    @ResponseBody
    public String hello() {
        return "Hello World!";
    }

}
