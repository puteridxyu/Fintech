package com.Spring.SpringBootMysql.Service.ServiceImpl;

import com.Spring.SpringBootMysql.Service.UserService;
import com.Spring.SpringBootMysql.model.User;
import com.Spring.SpringBootMysql.repository.UserRepo;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Service
@Transactional
public class UserServiceImpl implements UserService {
    
    
    @Autowired
    private UserRepo userRepo;

    //GET LIST OF USERS
    @Override
    public Iterable<User> getAllUser() {
       return userRepo.findAll();
    }

    //POST A USER
    @Override
    public User createdUser(User user) {
        return userRepo.save(user);
    }

    //EDIT USERS
    @Override
    public void updateUser(Long id, User updateUser) {
        Optional <User> userToUpdateOptional = userRepo.findById(id);

        if (userToUpdateOptional.isPresent()) {
            User userToUpdate = userToUpdateOptional.get();
            userToUpdate.setUserName(updateUser.getUserName());
            userToUpdate.setEmail(updateUser.getEmail());
            userToUpdate.setPassword(updateUser.getPassword());
            userToUpdate.setPhoneNo(updateUser.getPhoneNo());
            userRepo.save(userToUpdate);
        }
    }

    //DELETE USER
    @Override
    public void deleteUser(Long id) {
        Optional<User> userToDeleteOptional = userRepo.findById(id);

        if (userToDeleteOptional.isPresent()) {
            User userToDelete = userToDeleteOptional.get();
            userRepo.delete(userToDelete);
        }
    }

    //POST NEW USER
    @Override
    public User login(Map<String, String> dataMap) {
        User user = userRepo.findByUsernameAndPassword(dataMap.get("username"), dataMap.get("password"));
        return user;
    }
    
    
}
