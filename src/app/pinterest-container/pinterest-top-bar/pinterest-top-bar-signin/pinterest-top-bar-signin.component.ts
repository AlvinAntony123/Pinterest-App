import { Component, OnInit } from '@angular/core';
import { ITile } from 'app/pinterest-container/pinterest-container.interface';
import { IUserDetails } from '../pinterest-top-bar-signup/pinterest-top-bar-signup.interface';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinterest-top-bar-signin',
  templateUrl: './pinterest-top-bar-signin.component.html',
  styleUrls: ['./pinterest-top-bar-signin.component.scss']
})
export class PinterestTopBarSigninComponent implements OnInit {
  
  public user!: Partial<IUserDetails>;
  public error: boolean = false

  constructor(
    private readonly userContext: UserService,
    private readonly router: Router
  ){}

  public ngOnInit(): void {
    this.user = {
      username: '',
      password: ''
    }
  }

  public SignIn(){
    console.log(this.userContext.ValidateUser(this.user));
    if(this.userContext.ValidateUser(this.user))
    {
      this.router.navigate(['home']);
    }
    else 
      this.error = true;
  }

  public SignUp(){
    this.router.navigate(['signup']);
  }
}
