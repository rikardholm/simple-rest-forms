package simple.sample.servlet.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
@RequestMapping(value = "event", method = POST)
public class EventController {

    @ExceptionHandler
    @ResponseStatus(BAD_REQUEST)
    @ResponseBody
    public ErrorMessages errors(ValidationException e) {
        return new ErrorMessages("firstName", e.getMessage());
    }


    @RequestMapping(value = "hello")
    @ResponseBody
    public String hello(@RequestParam String firstName) throws ValidationException {
        if (firstName.isEmpty()) {
            throw new ValidationException("May not be empty");
        }

        return "Hello " + firstName;
    }

    @RequestMapping(value = "store")
    @ResponseStatus(NO_CONTENT)
    public void store() {
    }

}
