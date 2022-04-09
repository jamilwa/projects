package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.backend.dev.errors.EndpointExceptionHandler;
import com.backend.dev.errors.ErrorResponse;

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
		EndpointExceptionHandler handlerObj1 = new EndpointExceptionHandler();
		ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setStatus(HttpStatus.I_AM_A_TEAPOT.value());
        errorResponse.getStatus();
        assertEquals(HttpStatus.I_AM_A_TEAPOT.value(), errorResponse.getStatus());
        
	}
	

}
