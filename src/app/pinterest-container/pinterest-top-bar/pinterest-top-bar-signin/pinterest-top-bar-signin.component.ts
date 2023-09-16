import { Component, OnInit } from '@angular/core';
import { ITile } from 'app/pinterest-container/pinterest-container.interface';
import { IUserDetails } from '../pinterest-top-bar-signup/pinterest-top-bar-signup.interface';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pinterest-top-bar-signin',
  templateUrl: './pinterest-top-bar-signin.component.html',
  styleUrls: ['./pinterest-top-bar-signin.component.scss']
})
export class PinterestTopBarSigninComponent implements OnInit {
  SigninForm!: FormGroup;

  public user!: Partial<IUserDetails>;
  public error: boolean = false

  constructor(
    private readonly userContext: UserService,
    private readonly router: Router,
    private formBuilder: FormBuilder
  ){}

  public ngOnInit(): void {
    this.SigninForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public SignIn(){
    console.log('hii');
    if(this.userContext.ValidateUser(this.SigninForm))
      this.router.navigate(['home']);
    else this.error = true;
  }

  public SignUp(){
    this.router.navigate(['signup']);
  }
}