<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserDetails } from './pinterest-top-bar-signup.interface';
import { UserService } from 'app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
>>>>>>> Stashed changes

@Component({
  selector: 'app-pinterest-top-bar-signup',
  templateUrl: './pinterest-top-bar-signup.component.html',
  styleUrls: ['./pinterest-top-bar-signup.component.scss']
})
<<<<<<< Updated upstream
export class PinterestTopBarSignupComponent {

=======
export class PinterestTopBarSignupComponent implements OnInit{
public form! : IUserDetails;
SignupForm!: FormGroup;

constructor(
  public readonly router : Router,
  public readonly userService: UserService,
  private formBuilder: FormBuilder
  ){}

public error: boolean=false;


public ngOnInit(): void {
  this.SignupForm = this.formBuilder.group({
    email: ['', [Validators.required, this.validateEmailFormat]],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {Validator: this.validatePasswordMatch})
}
public onSubmit(){
  if(this.SignupForm.valid)
    console.log('submit')
}

public onReset(){
  this.form = {
    username : '',
    email : '',
    password : '',
    confirmpassword : ''
  }
}

public validateEmailFormat(control: any) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(control.value)) {
    return { invalidEmail: true };
  }

  return null;
}

public validatePasswordMatch(group: FormGroup) {
  const passwordControl = group.get('password');
  const confirmPasswordControl = group.get('confirmPassword');

  if (!passwordControl || !confirmPasswordControl) {
    // Return null if controls are not available
    return null;
  }

  const password = passwordControl.value;
  const confirmPassword = confirmPasswordControl.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}
>>>>>>> Stashed changes
}
