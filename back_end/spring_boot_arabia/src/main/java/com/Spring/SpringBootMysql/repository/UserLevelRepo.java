package com.Spring.SpringBootMysql.repository;

import org.springframework.data.repository.CrudRepository;

import com.Spring.SpringBootMysql.model.UserLevel;

public interface UserLevelRepo extends CrudRepository<UserLevel, Long> {
    
}
