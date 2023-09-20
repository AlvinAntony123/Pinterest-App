import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserDetails } from 'app/pinterest-container/pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.interface';


@Injectable()
export class LoginService {

  public apiUrl: string = 'https://localhost:7067/api/Authentication';

  constructor(
    private http: HttpClient
  ) { }

  authenticateUser(user: string){
    return this.http.post(this.apiUrl, user, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }

}
