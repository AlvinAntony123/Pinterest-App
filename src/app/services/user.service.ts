import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { IUserDetails } from 'app/pinterest-container/pinterest-top-bar/pinterest-top-bar-signup/pinterest-top-bar-signup.interface';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UserService {

  constructor(
    private readonly localstorageContext: LocalStorageService
  ) { }

  public AddUser(user: IUserDetails){
    this.localstorageContext.setStorage('user', user);
  }

  public GetUser(){
    return this.localstorageContext.getStorage('user');
  }

  public ValidateUser(currUser: FormGroup): boolean{
    var user = this.localstorageContext.getStorage('user');
    console.log(user);
    console.log(currUser.value);
    return currUser.value.username === user.username && currUser.value.password === user.password
  }
}
