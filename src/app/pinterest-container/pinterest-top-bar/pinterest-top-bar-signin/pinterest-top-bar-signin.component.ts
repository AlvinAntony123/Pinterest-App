import { Component, OnInit } from '@angular/core';
import { ITile } from 'app/pinterest-container/pinterest-container.interface';
import { IUserDetails } from '../pinterest-top-bar-signup/pinterest-top-bar-signup.interface';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { LocalStorageService } from 'app/services/local-storage.service';

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
    public readonly router: Router,
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private localStorageService : LocalStorageService
  ){}

  public ngOnInit(): void {
    this.SigninForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public SignIn(){
    this.authService.authenticateUser(JSON.stringify(this.SigninForm.value)).subscribe(
      response => {
        console.log(response),
        this.localStorageService.setStorage("jwt", response);
        this.router.navigate(['home']);
      }
    )
  }

  public SignUp(){
    this.router.navigate(['signup']);
  }
}