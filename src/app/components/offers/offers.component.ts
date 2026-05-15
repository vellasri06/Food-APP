import { Component } from '@angular/core';
import { CartService } from '../cartdetails.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  code = ""

  message = ""

  constructor(public cs:CartService){}

  apply(){

    let found = this.cs.offers.find(
      x => x.code == this.code
    )

    if(found){

      this.cs.appliedOffer = found

      this.message = "Offer Applied: " + found.code

    }
    else{

      this.message = "Invalid Code"

    }

  }

}