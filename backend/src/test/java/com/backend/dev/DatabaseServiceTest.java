package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.backend.dev.services.DatabaseService;

class DatabaseServiceTest {

	@Test
	void test() {
		DatabaseService service = new DatabaseService();
		assertEquals(null, service.getUserRepository()); 
		assertEquals(null, service.getIdeaRepository());
	}

}
