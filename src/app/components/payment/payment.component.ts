import { Component } from '@angular/core';
import { CartService } from '../cartdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(public cs:CartService,private route:Router){}
  done(){
    this.route.navigate(['./thanks'])
  }
  back(){
    this.route.navigate(['./order'])
  }
  home(){
    this.route.navigate(['./home'])
  }
}
