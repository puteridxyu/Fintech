package com.Spring.SpringBootMysql.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Spring.SpringBootMysql.Service.UserLevelService;
import com.Spring.SpringBootMysql.model.UserLevel;
import com.Spring.SpringBootMysql.repository.UserLevelRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/")
@Controller
public class UserLevelController {

    @Autowired
    UserLevelRepo userLevelRepo;
    @Autowired
    UserLevelService userLevelService;

    //GET ALL USER LEVEL
    @GetMapping("/userlevellist")
    public Iterable<UserLevel> getAllUserLevel() {
        return userLevelService.getAllUserLevel();
    }

     //POST NEW USERLEVEL
    @PostMapping("/inputuserlevel")
    public UserLevel createdUserLevel(@RequestBody UserLevel userLevel) {

        if (userLevel == null) throw new NullPointerException();
        return userLevelService.createdUserLevel(userLevel);
    }

    //DELETE EXISTING USERLEVEL
     @DeleteMapping("/deleteuserlevel")
     public void deleteUserLevel(@RequestParam Long id) {
         userLevelService.deleteUserLevel(id);
     }
}
