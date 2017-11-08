package com.aoto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@RestController
@EnableSwagger2
// @SpringBootApplication
// 标注启动配置入口，可以发现通过一个main方法启动。使用这个注解的类必须放置于最外层包中，因为默认扫描这个类以下的包。否则需要自己配置@ComponentScan
// 功能相当于@Configuration,@EnableAutoConfiguration,@ComponentScan
public class Application {

	@RequestMapping("/")
	public String greeting() {
		return "欢迎来到物资管理系统!";
	}

	@Bean
	public Docket createRestApi() {
		return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo()).select()
				.apis(RequestHandlerSelectors.basePackage("com.aoto"))
				.paths(PathSelectors.any())
				.build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("Spring Boot中使用Swagger2构建RESTful APIs")
				.contact(new Contact("赵德华", "http://www.aoto.com/", null))
				.build();
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
