package servlet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping()
public class ToolPageController {

    @RequestMapping(value = "/", method = GET)
    public String get() {
        return "forms";
    }

    @RequestMapping(value = "/nojs", method = GET)
    public String nojs() {
        return "no-javascript";
    }

}
