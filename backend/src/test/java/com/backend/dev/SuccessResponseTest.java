package com.backend.dev;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.backend.dev.errors.SuccessResponse;

class SuccessResponseTest {

	@Test
	void test() {
		SuccessResponse obj = new SuccessResponse();
		obj.setStatus(404);
		obj.setMessage("error");
		int outputStatus = obj.getStatus();
		String outputMsg = obj.getMessage();
		assertEquals(404, outputStatus);
		assertEquals("error", outputMsg);
	}

	@Test
	void testParamConstruction() {
		SuccessResponse obj = new SuccessResponse(201, "created");
		int outputStatus = obj.getStatus();
		String outputMsg = obj.getMessage();
		assertEquals(201, outputStatus);
		assertEquals("created", outputMsg);
	}
}
