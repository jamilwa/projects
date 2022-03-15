package com.backend.dev.repositories;

//import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.query.Param;

import com.backend.dev.model.*;

public interface IdeaRepository extends JpaRepository<Idea, Long> {
	
	//Optional<Idea> getIdeasByUsername(@Param)

}