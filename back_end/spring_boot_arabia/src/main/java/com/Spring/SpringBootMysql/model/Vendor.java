package com.Spring.SpringBootMysql.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "vendor")
public class Vendor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vendor_id;
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    @NotBlank
    private Integer phone_no;
    @NotBlank
    private Integer userlevel_id;

    public Long getVendorID() {
        return vendor_id;
    }
    public void setVendorID(Long vendor_id) {
        this.vendor_id = vendor_id;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getPhoneNo() {
        return phone_no;
    }
    public void setPhoneNo(Integer phone_no) {
        this.phone_no = phone_no;
    }

    public Integer getUserLevelID() {
        return userlevel_id;
    }
    public void setUserLevelID(Integer userlevel_id) {
        this.userlevel_id = userlevel_id;
    }
}