import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  flag=false;
  toggle(){
    this.flag=!this.flag;
  }
  username="";
  password="";
  error=false;
  constructor(private router:Router){}
  login(){

  if(
    this.username === "admin" &&
    this.password === "1234"
  ){

    localStorage.setItem(
      'login',
      'true'
    );

    this.router.navigate(['/adminprofile']);

  }else{

    this.error = true;

  }
}
  home(){
    this.router.navigate(['./home'])
  }
}
