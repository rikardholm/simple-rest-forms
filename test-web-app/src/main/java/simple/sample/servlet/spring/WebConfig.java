package simple.sample.servlet.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.UrlBasedViewResolver;
import simple.sample.servlet.controllers.EventController;

@Configuration
@EnableWebMvc
@ComponentScan("simple.sample.servlet.controllers")
public class WebConfig {
    @Bean
    public ViewResolver viewResolver() {
        InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
        internalResourceViewResolver.setPrefix("WEB-INF/jsp/");
        internalResourceViewResolver.setSuffix(".jsp");
        return internalResourceViewResolver;
    }
}
