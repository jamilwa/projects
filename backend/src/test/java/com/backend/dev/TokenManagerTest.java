package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.backend.dev.jwtutils.TokenManager;
import com.backend.dev.model.User;
import com.backend.dev.security.CustomUserDetails;

class TokenManagerTest {

	@Test
	void test() {
		TokenManager tmObj = new TokenManager();
		User userObj = new User("nishant@gmail.com", "nish@123");
		CustomUserDetails userDetailsObj = new CustomUserDetails(userObj);
		tmObj.setJwt();
		String str = tmObj.generateJwtToken(userDetailsObj);
	}
	

}
