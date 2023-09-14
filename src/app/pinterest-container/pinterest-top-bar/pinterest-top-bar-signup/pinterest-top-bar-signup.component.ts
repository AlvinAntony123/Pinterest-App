import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITile } from 'app/pinterest-container/pinterest-container.interface';
import { IUserDetails } from './pinterest-top-bar-signup.interface';

@Component({
  selector: 'app-pinterest-top-bar-signup',
  templateUrl: './pinterest-top-bar-signup.component.html',
  styleUrls: ['./pinterest-top-bar-signup.component.scss']
})
export class PinterestTopBarSignupComponent implements OnInit{
public form! : IUserDetails;

constructor(public readonly router : Router){}

public error: boolean=false;


public ngOnInit(): void {
  this.form = {
    email : '',
    username : '',
    password : '',
    confirmpassword : ''
  }
}
public onSubmit(){
  if(this.form.password === this.form.confirmpassword){
    {
      this.error = false;
      void this.router.navigate(['login']);
    }
  }
  else{
    this.error = true;
  }
}

public onReset(){
  this.form = {
    username : '',
    email : '',
    password : '',
    confirmpassword : ''
  }
}
}
