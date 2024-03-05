package com.Spring.SpringBootMysql.Service;

import com.Spring.SpringBootMysql.model.User;


public interface UserService {

    Iterable <User> getAllUser();

    User createdUser (User user);
    
    void deleteUser(Long id);
    
}
