package com.Spring.SpringBootMysql.Service;

import com.Spring.SpringBootMysql.model.UserLevel;


public interface UserLevelService {

    Iterable <UserLevel> getAllUserLevel();

    UserLevel createdUserLevel (UserLevel userLevel);
    
    void deleteUserLevel(Long id);
    
}
