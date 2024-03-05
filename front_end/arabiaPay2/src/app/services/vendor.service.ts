import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  serverHost = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  addVendor(input:any): Observable<any>{
    return this.http.post(this.serverHost + "/", input);
  }
}
