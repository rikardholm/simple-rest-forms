package simple.sample.servlet.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
@RequestMapping(value = "event", method = POST)
public class EventController {

    @RequestMapping(value = "hello")
    @ResponseBody
    public String hello() {
        return "Hello World!";
    }

    @RequestMapping(value = "store")
    @ResponseStatus(NO_CONTENT)
    public void store() {
    }

}
