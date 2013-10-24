package simple.sample.servlet.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import simple.sample.servlet.controllers.EventController;

@Configuration
@EnableWebMvc
@ComponentScan("simple.sample.servlet.controllers")
public class WebConfig {
    @Bean
    public EventController eventController() {
        return eventController();
    }
}
