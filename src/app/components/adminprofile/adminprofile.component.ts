import { Component, OnInit } from '@angular/core';
import { CartService } from '../cartdetails.service';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  groupedOrders: { [key: number]: any[] } = {};

  menuItems: any[] = [];

  newItem: any = {
    options: []
  };

  // option fields
  optionName: string = '';
  optionPrice: number = 0;
  optionImg: string = '';
  optionType: string = '';

  constructor(
    public cs: CartService,
    private router: Router,
    private menuService: MenuService
  ) {
    this.groupOrders();
  }
  feedbacks: any[] = [];
  ngOnInit() {

    this.menuService.menu$.subscribe(data => {
      this.menuItems = data;
    });
    this.feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
  }

  // ---------------- ORDERS ----------------

  groupOrders() {

    this.groupedOrders = {};

    for (let order of this.cs.orders) {

      const no = order.orderno;

      if (!this.groupedOrders[no]) {
        this.groupedOrders[no] = [];
      }

      for (let item of order.items) {

        this.groupedOrders[no].push({
          ...item,
          preferences: order.preferences,
          orderType: order.orderType,
          status: order.status,
          orderno: order.orderno
        });

      }
    }
  }

  remove(orderno: number) {

    this.cs.orders = this.cs.orders.filter(o => o.orderno !== orderno);

    localStorage.setItem('orders', JSON.stringify(this.cs.orders));

    this.groupOrders();
  }

  updateStatus(item: any) {

    for (let o of this.cs.orders) {
      if (o.orderno == item.orderno) {
        o.status = item.status;
      }
    }

    localStorage.setItem('orders', JSON.stringify(this.cs.orders));
  }

  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/admin']);
  }

  // ---------------- MENU ----------------
 
addItem() {

  this.menuService.addItem({
    name: this.newItem.name,
    price: this.newItem.price,
    img: this.newItem.img,
    category: this.newItem.category,
    
    // 🔥 IMPORTANT: create NEW array every time
    options: [...(this.newItem.options || [])],
    stock: this.newItem.stock
  });

  this.newItem = { options: [],stock:0 };

  alert("Item Added ✅");
}

  deleteItem(id: number, event: Event) {

    event.stopPropagation();
    this.menuService.deleteItem(id);

  }

  // ---------------- OPTIONS ----------------

 addOptionToItem(item: any) {

  // ensure each item has its OWN options array
  if (!item.options) {
    item.options = [];
  }

  item.options.push({
    name: this.optionName,
    price: this.optionPrice,
    img: this.optionImg,
    type: this.optionType
  });

  // reset inputs
  this.optionName = '';
  this.optionPrice = 0;
  this.optionImg = '';
  this.optionType = '';

  // 🔥 save properly
  const data = JSON.parse(localStorage.getItem('extraMenu') || '[]');

  const index = data.findIndex((x: any) => x.id === item.id);

  if (index !== -1) {
    data[index] = item;
  }

  localStorage.setItem('extraMenu', JSON.stringify(data));

  // refresh service
  this.menuService.menu$.subscribe(); // or refresh method
}
deleteFeedback(index: number) {

  // remove from array
  this.feedbacks.splice(index, 1);

  // ✅ UPDATE localStorage (VERY IMPORTANT)
  localStorage.setItem('feedbacks', JSON.stringify(this.feedbacks));

}
}