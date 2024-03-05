package com.Spring.SpringBootMysql.Service.ServiceImpl;

import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Spring.SpringBootMysql.Service.UserService;
import com.Spring.SpringBootMysql.model.User;
import com.Spring.SpringBootMysql.repository.UserRepo;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    //GET LIST OF USER LEVEL
    @Override
    public Iterable<User> getAllUser() {
       return userRepo.findAll();
    }

    //PUT
    @Override
    public User createdUser(User user) {
        return userRepo.save(user);
    }

    //DELETE
    @Override
    public void deleteUser(Long id) {
        Optional<User> userToDeleteOptional = userRepo.findById(id);

        if (userToDeleteOptional.isPresent()) {
            User userToDelete = userToDeleteOptional.get();
            userRepo.delete(userToDelete);
        }
    }
    

}
