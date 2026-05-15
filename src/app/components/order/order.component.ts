import { Component } from '@angular/core';
import { CartService } from '../cartdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrdersComponent {

  total = 0;
  finalTotal = 0;   // ✅ must declare

  constructor(public cs: CartService, private rotue: Router) {

    this.total = cs.total;

   
    this.calculate();
    } 
    calculate(){
       this.finalTotal = this.total; 
        if (this.cs.appliedOffer) {
      this.finalTotal -= this.cs.appliedOffer.discount;
    }
    } 
   



  selectOption(parcel: boolean) {

    this.cs.parcel = parcel;

    if (parcel) {

      this.cs.orderType = "Parcel"

      this.total = this.cs.total + 10;

    }
    else {

      this.cs.orderType = "Dinning"

      this.total = this.cs.total;

    }

    // ✅ update finalTotal again
    this.finalTotal = this.total;

    if (this.cs.appliedOffer) {
      this.finalTotal -= this.cs.appliedOffer.discount;
    }

  }


  check() {

    this.rotue.navigate(['./payment'])

    this.cs.checkout()

    alert("No more Changes")

  }


  back() {
    this.rotue.navigate(['./preference'])
  }


  home() {
    this.rotue.navigate(['./home'])
  }

}