package com.Spring.SpringBootMysql.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;



@Entity
@Table(name = "product")
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long product_id;
    @NotBlank
    private long vendor_id;
    @NotBlank
    private long product_name;
    @NotBlank
    private long product_price;
    
    public long getProduct_id() {
        return product_id;
    }
    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public long getVendor_id() {
        return vendor_id;
    }
    public void setVendor_id(long vendor_id) {
        this.vendor_id = vendor_id;
    }

    public long getProduct_name() {
        return product_name;
    }
    public void setProduct_name(long product_name) {
        this.product_name = product_name;
    }

    public long getProduct_price() {
        return product_price;
    }
    public void setProduct_price(long product_price) {
        this.product_price = product_price;
    }
}
