package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.backend.dev.errors.EndpointExceptionHandler;
import com.backend.dev.errors.ErrorResponse;
import com.backend.dev.errors.InvalidEndpointException;

class EndpointExceptionHandlerTest {

	@Test
	void test() {
		EndpointExceptionHandler handlerObj = new EndpointExceptionHandler();
		ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        errorResponse.getStatus();
        assertEquals(HttpStatus.NOT_FOUND.value(), errorResponse.getStatus());
        
	}
	
	@Test
	void testTeapot() {
		ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setStatus(HttpStatus.I_AM_A_TEAPOT.value());
        errorResponse.getStatus();
        assertEquals(HttpStatus.I_AM_A_TEAPOT.value(), errorResponse.getStatus());
        
	}
	
	@Test
	void testHandlerInvalid() {
		InvalidEndpointException exception = new InvalidEndpointException("test for invalid");
		EndpointExceptionHandler handlerObj1 = new EndpointExceptionHandler();
		handlerObj1.handleException(exception);
        
	}
	
	@Test
	void testHandlerException() {
		Exception exception1 = new Exception("test for exception");
		EndpointExceptionHandler handlerObj2 = new EndpointExceptionHandler();
		handlerObj2.handleException(exception1);
        
	}
	

}
