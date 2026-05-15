import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cartdetails.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferencesComponent {

  mealType = ''
  foodType = ''

  foods: string[] = []

  items: string[] = []

  selectedItems: string[] = []

  flavors: string[] = []


  constructor(
    private cs: CartService,
    private router: Router
  ) { }



  mealChanged() {

    if (this.mealType == 'nonveg') {

      this.foods = ['Biryani', 'Fried Rice', 'Curry']

    }

    else if (this.mealType == 'veg') {

      this.foods = ['Biryani', 'Meals', 'Snacks']

    }

    else if (this.mealType == 'vegan') {

      this.foods = ['Vegan Bowl', 'Salad']

    }

    this.items = []
    this.selectedItems = []

  }



  foodChanged() {

    if (this.foodType == 'Biryani') {

      if (this.mealType == 'nonveg') {

        this.items = [
          'Chicken Biryani',
          'Mutton Biryani',
          'Egg Biryani'
        ]

      }

      if (this.mealType == 'veg') {

        this.items = [
          'Paneer Biryani',
          'Veg Biryani',
          'Mushroom Biryani'
        ]

      }

    }


    if (this.foodType == 'Fried Rice') {

      this.items = [
        'Chicken Fried Rice',
        'Egg Fried Rice',
        'Veg Fried Rice'
      ]

    }

  }



  toggleItem(name: string, e: any) {

    if (e.target.checked) {

      this.selectedItems.push(name)

    } else {

      this.selectedItems =
        this.selectedItems.filter(x => x != name)

    }

  }



  toggleFlavor(name: string, e: any) {

    if (e.target.checked) {

      this.flavors.push(name)

    } else {

      this.flavors =
        this.flavors.filter(x => x != name)

    }

  }



  save() {

    this.cs.preferences = {

      meal: this.mealType,
      food: this.foodType,
      items: this.selectedItems,
      flavors: this.flavors

    }

    this.router.navigate(['/order'])

  }
  back(){
    this.router.navigate(['/cart'])
  }
  home(){
      this.router.navigate(['/home'])
  }
}