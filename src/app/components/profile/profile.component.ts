import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user:any = {}

  constructor(private router:Router){}

ngOnInit() {

  let logged = localStorage.getItem("logged");

  if (!logged) {
    this.router.navigate(['/login']);
    return;
  }

  const isAdmin = localStorage.getItem("isAdmin") === "true";

  // 🔴 ADMIN CASE
  if (isAdmin) {

    this.user = {
      firstname: 'Admin',
      lastname: '',
      email: 'admin@gmail.com',
      mobile: 'N/A',
      location: 'Admin Panel'
    };

    return;
  }

  // 🔵 USER CASE
  let data = localStorage.getItem("currentUser");

  if (data) {
    this.user = JSON.parse(data);
  }
}

  logout(){

    localStorage.removeItem("logged")
    localStorage.removeItem("currentUser")

    this.router.navigate(['/login'])

  }

}