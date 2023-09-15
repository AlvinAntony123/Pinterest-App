import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinterest-top-bar',
  templateUrl: './pinterest-top-bar.component.html',
  styleUrls: ['./pinterest-top-bar.component.scss']
})
export class PinterestTopBarComponent {
  constructor(
    private readonly router: Router
  ){}

  public GotoLogin(){
    this.router.navigate(['login']);
  }

  public GotoSignUp(){
    this.router.navigate(['signup']);
  }

  public GotoCreate(){
    this.router.navigate(['create']);
  }

  public GotoHome(){
    this.router.navigate(['home']);
  }
}
