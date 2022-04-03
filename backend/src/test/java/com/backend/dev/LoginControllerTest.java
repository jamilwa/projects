package com.backend.dev;

import static org.junit.Assert.assertNotNull;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.backend.dev.controller.LoginController;
import com.backend.dev.jwtutils.TokenManager;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc

public class LoginControllerTest {

	@Autowired
	private MockMvc mvc;
	
    @Autowired
    private TokenManager tokenManager;
    
    @Autowired
    private LoginController loginC;
    
   
	
	@Test
	public void shouldNotAllowAccessToUnauthUsers() throws Exception {
		mvc.perform(MockMvcRequestBuilders.post("/login")).andExpect(status().isForbidden());
	}
	
	@Test
	public void shouldGenerateAuthToken() throws Exception {
		String token = loginC.cre
		
		assertNotNull(token);
		mvc.perform(MockMvcRequestBuilders.post("/login"));
		
		
		
	}
}
