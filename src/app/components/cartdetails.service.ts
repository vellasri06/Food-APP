import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[] = [];
  total = 0;
  offers = [
  { code: "SAVE50", discount: 50 },
  { code: "SAVE20", discount: 20 },
  { code: "FREE10", discount: 10 }
]

appliedOffer:any = null

  orderno = 1;

  orders: any[] = [];

  preferences: any = {};

  parcel = false;
  orderType = '';

  constructor() {

    this.loadCart();

    const o = localStorage.getItem('orders');

    if (o) {
      this.orders = JSON.parse(o);
    }
    const data = localStorage.getItem('orders');

    if (data) {
      this.orders = JSON.parse(data);
    }

  }

  add(name: string, price: number) {

    let item = this.cart.find(x => x.name == name);

    if (item) {

      item.qty++;
      this.total += price;

    } else {

      this.cart.push({
        name: name,
        price: price,
        qty: 1
      });

      this.total += price;

    }

    this.saveCart();
  }


  remove(index: number) {

    this.total -= this.cart[index].price;

    this.cart.splice(index, 1);

    this.saveCart();

  }


  saveCart() {

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cart)
    );

    localStorage.setItem(
      'total',
      this.total.toString()
    );

    localStorage.setItem(
      'orderno',
      this.orderno.toString()
    );

  }


  loadCart() {

    const data = localStorage.getItem('cart');

    const t = localStorage.getItem('total');

    const o = localStorage.getItem('orderno');


    if (data) {
      this.cart = JSON.parse(data);
    }

    if (t) {
      this.total = Number(t);
    }

    if (o) {
      this.orderno = Number(o);
    }

  }
  lastotal = 0;


  // ✅ FINAL CHECKOUT (USE ONLY THIS)

  checkout() {

    if (this.cart.length == 0) return;


    let finalTotal = this.total;

    if (this.parcel) {
      finalTotal += 10;
    }

    this.lastotal = finalTotal;
    this.orders.push({

      orderno: this.orderno,

      items: [...this.cart],

      preferences: { ...this.preferences },
      orderType: this.orderType,

      parcel: this.parcel,
      status: 'Preparing',

      total: finalTotal

    });


    localStorage.setItem(
      'orders',
      JSON.stringify(this.orders)
    );


    this.cart = [];

    this.total = 0;

    this.preferences = {};

    this.parcel = false;


    this.orderno++;


    this.saveCart();

  }
  count: number = 1;
  addition(name: string, price: number) {
    let item = this.cart.find(x => x.name == name);

    if (item) {
      item.qty++;
      this.total += price;
    }

    this.saveCart();
  }
  subtraction(name: string, price: number) {
    let item = this.cart.find(x => x.name == name);

    if (item && item.qty > 1) {

      item.qty--;
      this.total -= price;

    }

    this.saveCart();
  }


}