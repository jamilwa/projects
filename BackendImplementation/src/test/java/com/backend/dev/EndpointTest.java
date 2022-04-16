package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import com.backend.dev.errors.EndpointExceptionHandler;
import com.backend.dev.errors.ErrorResponse;
import com.backend.dev.errors.InvalidEndpointException;
import com.backend.dev.services.DatabaseService;

class EndpointTest {

	@Test
	void testResponseNew() {
		ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        errorResponse.getStatus();
        assertEquals(HttpStatus.NOT_FOUND.value(), errorResponse.getStatus());
        
	}

	@Test
	void testService() {
		DatabaseService service = new DatabaseService();
		assertEquals(null, service.getUserRepository()); 
		assertEquals(null, service.getIdeaRepository());
	}
	
	@Test
	void testTeapotValue() {
		ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setStatus(HttpStatus.I_AM_A_TEAPOT.value());
        errorResponse.getStatus();
        assertEquals(HttpStatus.I_AM_A_TEAPOT.value(), errorResponse.getStatus());
        
	}
	
	@Test
	void testHandlerInvalidEndpoint() {
		InvalidEndpointException exception = new InvalidEndpointException("test for invalid");
		EndpointExceptionHandler handlerObj1 = new EndpointExceptionHandler();
		handlerObj1.handleException(exception);
		assertEquals("test for invalid", exception.getMessage());
	}
	
	@Test
	void testExceptionOfHandler() {
		Exception exception1 = new Exception("test for exception");
		EndpointExceptionHandler handlerObj2 = new EndpointExceptionHandler();
		handlerObj2.handleException(exception1);
		assertEquals("test for exception", exception1.getMessage());
        
	}
	

}
