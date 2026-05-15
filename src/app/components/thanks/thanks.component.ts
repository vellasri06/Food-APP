import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent {
  constructor(public route:Router){}
  home(){
      this.route.navigate(['./home'])
  }
  time = 10

ngOnInit(){

let x = setInterval(()=>{

this.time--

if(this.time==0){

clearInterval(x)

this.home()

}

},1000)

}
feedback(){
  this.route.navigate(['./feedback'])
}
}
