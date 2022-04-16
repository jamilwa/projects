package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.backend.dev.jwtutils.JwtResponseModel;
import com.backend.dev.services.DatabaseService;

class JwtResponseModelTest {

	@Test
	void testJwtResponsModel() {
		JwtResponseModel obj = new JwtResponseModel("test Token");
		String testToken = obj.getToken();
		assertEquals("test Token", testToken);
	}

	@Test
	void test() {
		DatabaseService service = new DatabaseService();
		assertEquals(null, service.getUserRepository()); 
		assertEquals(null, service.getIdeaRepository());
	}

}
