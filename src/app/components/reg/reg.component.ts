import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  constructor(private router: Router,private auth:AuthService) { }

  firstname = ""
  lastname = ""
  email = ""
  password = ""
  confirm = ""
  mobile = ""
  location = ""

  showError = false
  passError = false
  matchError = false


  login() {
    this.router.navigate(['login'])
  }


  reg() {

  this.showError = true
  this.passError = false
  this.matchError = false

  if (!this.firstname || !this.lastname || !this.email || !this.password) {
    return
  }

  if (this.password.length < 8) {
    this.passError = true
    return
  }

  if (this.password != this.confirm) {
    this.matchError = true
    return
  }

  let user = {
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    password: this.password,
    mobile: this.mobile,
    location: this.location,
    role: 'user' // ✅ IMPORTANT (for future admin/user separation)
  }
  let users = JSON.parse(localStorage.getItem("users") || "[]")
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users))
  this.auth.register(user)
  this.router.navigate(['login'])

}

}