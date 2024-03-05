import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  serverHost = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getClients(){
    return this.http.get(this.serverHost + "/clientlist");
  }
}