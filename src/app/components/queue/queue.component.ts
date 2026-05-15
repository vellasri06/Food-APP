import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  constructor(
    public cs: CartService,
    private router: Router
  ) {}

  ngOnInit() {

    const data = localStorage.getItem('orders');

    if (data) {
      this.cs.orders = JSON.parse(data);
    }

  }


  activeOrders(){

    return this.cs.orders.filter(
      o => o.status !== ''
    );

  }


  back(){
    this.router.navigate(['/home']);
  }
  refresh(){
    location.reload()
  }

}