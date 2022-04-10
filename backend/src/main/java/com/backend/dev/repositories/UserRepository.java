package com.backend.dev.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.backend.dev.model.*;

/**
 * The Interface UserRepository.
 */
public interface UserRepository extends JpaRepository<User, Long> {

	/**
	 * Find by email.
	 *
	 * @param s as a String
	 * @return the optional
	 */
	Optional<User> findByEmail(@Param("email") String s);
	
}