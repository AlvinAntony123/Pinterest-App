import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserDetails } from './pinterest-top-bar-signup.interface';
import { UserService } from 'app/services/user.service';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LocalStorageService } from 'app/services/local-storage.service';

@Component({
  selector: 'app-pinterest-top-bar-signup',
  templateUrl: './pinterest-top-bar-signup.component.html',
  styleUrls: ['./pinterest-top-bar-signup.component.scss']
})
export class PinterestTopBarSignupComponent implements OnInit{
public form! : IUserDetails;
public name! : AbstractControl;
public signUpForm! : FormGroup;
public error : boolean = false;

constructor(
  public readonly router : Router,
  public readonly userService: UserService,
  private fb:FormBuilder,
  private readonly localStorage : LocalStorageService
  ){}

public ngOnInit(): void {
  this.signUpForm = this.fb.group({
    email : ['', Validators.compose([Validators.required, this.emailValidator()])],
    username :  ['', Validators.required],
    password : ['', Validators.required],
    confirmpassword : ['', Validators.required, this.isPasswordSame('password')]
  })
  this.name = this.signUpForm.controls['username'];
}

public onSubmit(){
  if(this.signUpForm.valid && this.isTermsAgreed()){
    {
      this.error = false;
      this.userService.AddUser(this.signUpForm.value);
      void this.router.navigate(['login']);
    }
  }
  else{
     this.error = true;
  }
}

public onReset(){
  void this.signUpForm.reset();
}
private emailValidator(): ValidatorFn {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (control: AbstractControl): {[key: string]: boolean} | null => {
    if (!control.value) {
      return null;
    }
    return emailPattern.test(control.value) ? null : { invalidEmail: true };
  };
}

private isPasswordSame(controlKey: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (!control.value) {
      return null;
    }

    return this.signUpForm.controls[controlKey].value === control.value ? null :
      { passwordNotMatched: true }
  }
}

public isTermsAgreed(): boolean {
  return this.signUpForm.get('termsAgreement')?.value === true;
}

}
