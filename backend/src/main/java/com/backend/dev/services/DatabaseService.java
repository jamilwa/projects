package com.backend.dev.services;

import com.backend.dev.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DatabaseService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private IdeaRepository ideaRepository;


    public UserRepository getUserRepository() {
        return userRepository;
    }

    public IdeaRepository getIdeaRepository() {
        return ideaRepository;
    }

}