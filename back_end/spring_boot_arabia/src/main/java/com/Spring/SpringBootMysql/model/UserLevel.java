package com.Spring.SpringBootMysql.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "user_level")
public class UserLevel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userlevel_id;
    @NotBlank
    private String level;

    public Long getUserLevelID() {
        return userlevel_id;
    }
    public void setUserLevelID(Long userlevel_id) {
        this.userlevel_id = userlevel_id;
    }

    public String getLevel() {
        return level;
    }
    public void setLevel(String level) {
        this.level = level;
    }
}
