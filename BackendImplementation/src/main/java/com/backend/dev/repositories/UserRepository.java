package com.backend.dev.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.backend.dev.model.*;

public interface UserRepository extends JpaRepository<User, Long> {

	
	Optional<User> findByEmail(@Param("email") String s);

	// Optional<User> findByUsername(String s);
	

}