import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent {

  constructor(public route:Router){}
  selectedName = '';
  calories = 0;
  fat = 0;
  protein = 0;
  carbs = 0;

  show(name: string, cal: number, fat: number, pro: number, carb: number) {

    this.selectedName = name;
    this.calories = cal;
    this.fat = fat;
    this.protein = pro;
    this.carbs = carb;

    console.log("clicked", name); // ✅ check click

  }
  home(){
    this.route.navigate(['./home'])
  }

}