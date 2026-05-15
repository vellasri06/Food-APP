import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  email = "";
  password = "";
  role = "";   // 🔴 NEW

  showError = false;
  invalid = false;

 login() {

  this.showError = true
  this.invalid = false

  if (!this.email || !this.password) return

  // ✅ STEP 1: CHECK ADMIN FIRST
  if (this.email === "admin@gmail.com" && this.password === "admin123") {

    localStorage.setItem("logged", "true")
    localStorage.setItem("role", "admin")

    // optional admin data
    localStorage.setItem("currentUser", JSON.stringify({
      firstname: "Admin",
      lastname: "",
      email: this.email
    }))

    this.router.navigate(['home'])
    return
  }

  // ✅ STEP 2: NORMAL USER LOGIN
  let ok = this.auth.login(this.email, this.password)

  if (ok) {

    localStorage.setItem("logged", "true")
    localStorage.setItem("role", "user")

    let users = JSON.parse(localStorage.getItem("users") || "[]")
    let foundUser = users.find((u: any) => u.email === this.email)

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser))
    }

    this.router.navigate(['home'])

  } else {
    this.invalid = true
  }
}

  register() {
    this.router.navigate(['register']);
  }

}