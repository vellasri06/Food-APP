import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseMenu: any[] = [];

  private menuSubject = new BehaviorSubject<any[]>(this.load());

  menu$ = this.menuSubject.asObservable();

  constructor() {}

private load() {

  const extra = JSON.parse(localStorage.getItem('extraMenu') || '[]');

  // ✅ ADD STOCK TO OLD ITEMS
  const updated = extra.map((item: any) => {

    if (item.stock === undefined) {
      item.stock = 10; // 👉 default stock for old items
    }

    return item;
  });

  // ✅ SAVE BACK (IMPORTANT)
  localStorage.setItem('extraMenu', JSON.stringify(updated));

  return [...this.baseMenu, ...updated];
}

  private refresh() {
    const extra = JSON.parse(localStorage.getItem('extraMenu') || '[]');
    this.menuSubject.next([...this.baseMenu, ...extra]);
  }

  addItem(item: any) {

    const extra = JSON.parse(localStorage.getItem('extraMenu') || '[]');

    item.id = Date.now();
    item.options = item.options || [];

    extra.push(item);

    localStorage.setItem('extraMenu', JSON.stringify(extra));

    this.refresh();
  }

  deleteItem(id: number) {

    let extra = JSON.parse(localStorage.getItem('extraMenu') || '[]');

    extra = extra.filter((item: any) => item.id !== id);

    localStorage.setItem('extraMenu', JSON.stringify(extra));

    this.refresh();
  }
}