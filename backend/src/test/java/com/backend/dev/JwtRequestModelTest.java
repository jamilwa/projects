package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.backend.dev.jwtutils.JwtRequestModel;

class JwtRequestModelTest {

	@Test
	void testJwtRequestModel() {
		JwtRequestModel obj = new JwtRequestModel();
		obj.setUsername("foo@gmail.com");
		obj.setPassword("foo@123");
		assertEquals("foo@gmail.com", obj.getUsername());
		assertEquals("foo@123", obj.getPassword());
	
	}
	
	@Test
	void testConstructor() {
		JwtRequestModel obj1 = new JwtRequestModel("test@gmail.com", "test@123");
		assertEquals("test@gmail.com", obj1.getUsername());
		assertEquals("test@123", obj1.getPassword());
	}

}
