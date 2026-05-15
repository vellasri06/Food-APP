import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  orders: any[] = [];   // ✅ MUST be inside class

  ngOnInit(): void {

    const data = localStorage.getItem('orders');

    if (data) {
      this.orders = JSON.parse(data);
    }

  }

}