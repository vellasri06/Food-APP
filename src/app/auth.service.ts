import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }


// get users
getUsers(){

let users = localStorage.getItem('users')

return users ? JSON.parse(users) : []

}


// register
register(user:any){

let users = this.getUsers()

users.push(user)

localStorage.setItem('users', JSON.stringify(users))

}


// login
login(email:string,password:string){

let users = this.getUsers()

let u = users.find(
(x:any)=> x.email==email && x.password==password
)

if(u){

localStorage.setItem('login','true')

return true

}

return false

}


// check login
isLoggedIn(){

return localStorage.getItem('login')=='true'

}


// logout
logout(){

localStorage.removeItem('login')

}

}