package com.backend.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RestController;
import com.backend.dev.model.*;

import com.backend.dev.repositories.UserRepository;
import com.backend.dev.services.DatabaseService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
	@Autowired
	public UserRepository userRepository;
	
	@Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private DatabaseService databaseService;
	
	
	@PostMapping("/user")
	public void addUser(@RequestBody User user) {
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
		
		
	}

}
