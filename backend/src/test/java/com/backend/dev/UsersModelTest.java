package com.backend.dev;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import com.backend.dev.model.User;

class UsersModelTest {

	@Test
	void modelUserTest() {
		User userObj = new User("nishant@gmail.com", "nish@123");
		User userObj1 = new User("nishant@gmail.com", "nish@123");
		userObj.setIdeas(null);
		userObj.getIdeas();
		
		assertEquals(null, userObj.getIdeas());
		assertTrue(userObj.hashCode() == userObj1.hashCode());
		assertTrue(userObj.equals(userObj1) && userObj1.equals(userObj));
		assertEquals(true, userObj.equals(userObj));
		assertEquals(false, userObj.equals(null));
		assertEquals(false, userObj.equals(userObj.getClass()));
	}
	
	@Test
	void testUserToString() {
		User mainObj = new User();
		User obj1 = new User("foo@gmail.com", "foo@123");
		User obj2 = new User("foo@gmail.com", "foo@123");
		String email = obj2.getEmail();
		String password = obj2.getPassword();
		assertEquals("User [email=" + email + ", password=" + password + "]", obj1.toString());
	}
	

}
