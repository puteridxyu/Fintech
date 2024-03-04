package com.Spring.SpringBootMysql.Service.ServiceImpl;

import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spring.SpringBootMysql.Service.UserLevelService;
import com.Spring.SpringBootMysql.model.UserLevel;
import com.Spring.SpringBootMysql.repository.UserLevelRepo;

@Service
@Transactional
public class UserLevelServiceImpl implements UserLevelService {

    @Autowired
    private UserLevelRepo userLevelRepo;

    //GET LIST OF USER LEVEL
    @Override
    public Iterable<UserLevel> getAllUserLevel() {
       return userLevelRepo.findAll();
    }

    //PUT
    @Override
    public UserLevel createdUserLevel(UserLevel userLevel) {
        return userLevelRepo.save(userLevel);
    }

    //DELETE
    @Override
    public void deleteUserLevel(Long id) {
        Optional<UserLevel> userLevelToDeleteOptional = userLevelRepo.findById(id);

        if (userLevelToDeleteOptional.isPresent()) {
            UserLevel userLevelToDelete = userLevelToDeleteOptional.get();
            userLevelRepo.delete(userLevelToDelete);
        }
    }
    

}
