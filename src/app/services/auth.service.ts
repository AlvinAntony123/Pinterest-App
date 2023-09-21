import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) 
  { }

  authenticateUser(user : string)
  {
    return this.http.post("https://localhost:7034/api/auth/login", user, {
      headers : new HttpHeaders({
        "Content-Type" : "application/json"
      })
    });
  }
}
