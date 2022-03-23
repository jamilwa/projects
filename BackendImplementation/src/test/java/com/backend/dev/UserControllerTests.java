package com.backend.dev;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.backend.dev.controller.UserController;
import com.backend.dev.model.User;
import com.backend.dev.repositories.UserRepository;
import com.backend.dev.services.DatabaseService;

@WebMvcTest(UserController.class)
public class UserControllerTests {
	
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private DatabaseService databaseService;
	
	@MockBean
	private UserRepository userRepository;
	
	@Test
	void testExcel() throws Exception {
		List<User> listUsers = new ArrayList<>();
		listUsers.add(new User("nihaad@gmail.com", "nihaad@123"));
		listUsers.add(new User("reshma@outlook.com", "reshma@234"));
		
		Mockito.when(databaseService.getUserRepository().findAll()).thenReturn(listUsers);
		String url = "/user";
		mockMvc.perform(get(url)).andExpect(status().isOk());
	}	
	
}
