package com.Spring.SpringBootMysql.Service;


import com.Spring.SpringBootMysql.model.User;


public interface UserService {

    
    Iterable <User> getAllUser();

    User createdUser(User user);

    void updateUser(Long id, User updateUser);
    
    void deleteUser(Long id);
}
