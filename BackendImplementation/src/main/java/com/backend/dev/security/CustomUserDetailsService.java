package com.backend.dev.security;

import com.backend.dev.model.*;

import com.backend.dev.services.DatabaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private DatabaseService databaseService;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Optional<User> user = databaseService.getUserRepository().findByEmail(s);
        user.orElseThrow(() -> new UsernameNotFoundException("Not found user : " + s));
        return user.map(CustomUserDetails::new).get();
    }
}