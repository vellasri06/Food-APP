import { Component } from '@angular/core';
import { CartService } from '../cartdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(public cs: CartService,
    private router:Router
  ) {}
 

  remove(index: number) {
    this.cs.remove(index);
  }
  saveCart(){
    //this.cs.completeOrder()
     this.router.navigate(['/preference'])
  }
  addit(name:string,price:number){
    this.cs.addition(name,price);
  }
  sub(name:string,price:number){
      //this.cs.remove();
      //this.count--;
      this.cs.subtraction(name,price)
  }
  back(){
    this.router.navigate(['./menu'])
  }
  home(){
    this.router.navigate(['./home'])
  }
}