package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.dto.UserDTO;
import ru.kata.spring.boot_security.demo.services.UserService;

@RestController
public class CurrentUserController {
    private final UserService userServiceImpl;

    @Autowired
    public CurrentUserController(UserService userServiceImpl) {
        this.userServiceImpl = userServiceImpl;
    }

    @GetMapping("/currentuser")
    UserDTO getCurrentUser(Authentication authentication) {
        return userServiceImpl.getUserByUserName(authentication.getName());
    }
}
