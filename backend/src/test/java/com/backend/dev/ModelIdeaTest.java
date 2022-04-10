package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.Assert.assertTrue;
import org.junit.jupiter.api.Test;

import com.backend.dev.model.Idea;
import com.backend.dev.model.User;


class ModelIdeaTest {

		@Test
		void modelIdeaTest() {
			Idea mainIdea = new Idea();
		    Idea ideaObj = new Idea(null, "title", "description", 1);
			Idea ideaObj1 = new Idea(null, "title", "description", 1);
			mainIdea.setId(3);
			long idContainer = mainIdea.getId();
			mainIdea.setUser(null);
			
			assertEquals(3, idContainer);
			assertEquals(null, mainIdea.getUser());
			assertTrue(ideaObj.hashCode() == ideaObj1.hashCode());
			assertTrue(ideaObj.equals(ideaObj1) && ideaObj1.equals(ideaObj));
			assertEquals(true, ideaObj.equals(ideaObj));
			assertEquals(false, ideaObj.equals(null));
			assertEquals(false, ideaObj.equals(ideaObj.getClass()));
		}
		
		@Test
		void testUserToString() {
			Idea mainObjIdea = new Idea(null, "title", "description", 1);
			Idea toStringObj = new Idea(null, "title", "description", 1);
			User user = toStringObj.getUser();
			String title = toStringObj.getIdeaTitle();
			String description = toStringObj.getIdeaDescription();
			int storypoints = toStringObj.getIdeaStorypoints();
			assertEquals("Idea [email=" + user + ", ideaTitle=" + title + ", ideaDescription=" + description
					+ ", ideaStorypoints=" + storypoints + "]", mainObjIdea.toString());
		}
		

	}


