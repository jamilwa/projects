package com.backend.dev;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.backend.dev.controller.UserController;
import com.backend.dev.model.User;
import com.backend.dev.repositories.UserRepository;
import com.backend.dev.security.SecurityConfiguration;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(controllers=UserController.class, excludeAutoConfiguration=SecurityAutoConfiguration.class)
class UserControllerTests {
	
	@Autowired
	MockMvc mockMvc;
	
	@MockBean
	UserRepository userRepository;
	
	Optional<User> listUsers = Optional.ofNullable(new User("nihaad@gmail.com", "nihaad123"));
	User u1 = new User("nihaad@gmail.com", "nihaad123");
	
	@Test
	void addUserTest() throws Exception {
		
	
	
		mockMvc.perform(MockMvcRequestBuilders.post("/user").contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk());	
	}	
	
}
