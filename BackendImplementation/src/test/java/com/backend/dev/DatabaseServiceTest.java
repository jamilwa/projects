package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.backend.dev.repositories.IdeaRepository;
import com.backend.dev.repositories.UserRepository;
import com.backend.dev.services.DatabaseService;

@RunWith(SpringRunner.class)
@SpringBootTest
class DatabaseServiceTest {

	@MockBean
	DatabaseService databaseService;
	
	@MockBean
	UserRepository userRepository;
	
	@MockBean
	IdeaRepository ideaRepository;
	
	@Test
	void test() {
		assertFalse(userRepository.exists(null));
		assertEquals(null, databaseService.getUserRepository()); 
		assertEquals(null, databaseService.getIdeaRepository());
		assertFalse(ideaRepository.exists(null));
	}
	
	@Test
	void databaseTest() {
		DatabaseService obj = new DatabaseService();
		assertNull(obj.getUserRepository());
		assertNull(obj.getIdeaRepository());
	}

}
