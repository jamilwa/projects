package com.backend.dev.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.query.Param;

import com.backend.dev.model.*;

public interface IdeaRepository extends JpaRepository<Idea, Long> {


}