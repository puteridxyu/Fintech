package com.Spring.SpringBootMysql.Service;


import java.util.Map;

import com.Spring.SpringBootMysql.model.Client;


public interface ClientService {

    Iterable <Client> getAllClient();

    Client createdClient(Client user);

    void updateClient(Long id, Client updateUser);
    
    void deleteClient(Long id);

    Client login(Map<String,String> dataMap); 
}
