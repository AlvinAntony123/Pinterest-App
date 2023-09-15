<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { ITile } from 'app/pinterest-container/pinterest-container.interface';
import { IUserDetails } from '../pinterest-top-bar-signup/pinterest-top-bar-signup.interface';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> Stashed changes

@Component({
  selector: 'app-pinterest-top-bar-signin',
  templateUrl: './pinterest-top-bar-signin.component.html',
  styleUrls: ['./pinterest-top-bar-signin.component.scss']
})
<<<<<<< Updated upstream
export class PinterestTopBarSigninComponent {

=======
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
    console.log('signin')
  }

  public SignUp(){
    this.router.navigate(['signup']);
  }
>>>>>>> Stashed changes
}
