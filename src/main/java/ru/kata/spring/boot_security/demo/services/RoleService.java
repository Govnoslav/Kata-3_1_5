package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.entity.Role;


public interface RoleService {

    Role findRoleByAuthority(String authority);
}
