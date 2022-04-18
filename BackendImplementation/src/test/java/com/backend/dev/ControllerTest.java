//package com.backend.dev;
//
//import static org.junit.Assert.assertTrue;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//import java.io.IOException;
//
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.context.web.WebAppConfiguration;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//import org.springframework.web.context.WebApplicationContext;
//import com.backend.dev.model.Idea;
//import com.fasterxml.jackson.core.JsonParseException;
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.JsonMappingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@WebAppConfiguration
//class ControllerTest {
//	
//   @Autowired
//   private MockMvc mvc;
//   
//   @Autowired
//   WebApplicationContext webApplicationContext;
//
//   @BeforeEach
//   private void setUp() {
//      mvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
//   }
//   protected String mapToJson(Object obj) throws JsonProcessingException {
//      ObjectMapper objectMapper = new ObjectMapper();
//      return objectMapper.writeValueAsString(obj);
//   }
//   private <T> T mapFromJson(String json, Class<T> clazz)
//      throws JsonParseException, JsonMappingException, IOException {
//      
//      ObjectMapper objectMapper = new ObjectMapper();
//      return objectMapper.readValue(json, clazz);
//   }
//   
//   @Test
//   void getIdeasList() throws Exception {
//      String uri = "/ideas";
//      MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri)
//         .accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
//      
//      int status = mvcResult.getResponse().getStatus();
//      assertEquals(200, status);
//      String content = mvcResult.getResponse().getContentAsString();
//      Idea[] idealist = mapFromJson(content, Idea[].class);
//      assertTrue(idealist.length > 0);
//   }
//
//}
