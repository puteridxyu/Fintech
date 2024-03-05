import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  serverHost = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  registerUser(){
    return this.http.get(this.serverHost + "/register");
  }
}
