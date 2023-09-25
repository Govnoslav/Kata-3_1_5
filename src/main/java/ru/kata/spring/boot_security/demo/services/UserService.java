package ru.kata.spring.boot_security.demo.services;


import org.springframework.security.core.Authentication;
import ru.kata.spring.boot_security.demo.dto.UserDTO;
import ru.kata.spring.boot_security.demo.entity.User;

import java.util.List;

public interface UserService {
    void createUser(User user, String userRole);
    void createUser(User user);

    List<User> findAllUsers();
    List<UserDTO> getAllUsers();

    User findUserById(Long id);

    void deleteUserById(Long id);

    void updateUser(User user, String userRole);
    void updateUser(User user);


    User findUserByUserName(String userName);
    UserDTO getUserByUserName(String userName);

    String getAllRolesFromCurrentUser(Authentication authentication);
}
