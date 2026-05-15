import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent {
  constructor(private route: Router) { }
  rating = 0

  message = "Click on stars to rate"

  comment = ""


  rate(n: number) {

    this.rating = n

    if (n == 1) this.message = "Very Bad 😢"
    if (n == 2) this.message = "Bad 😕"
    if (n == 3) this.message = "Okay 🙂"
    if (n == 4) this.message = "Good 😍"
    if (n == 5) this.message = "Excellent 🤩"

  }


  submit() {

    if (this.rating == 0) {
      alert("Please give rating");
      return;
    }

    // ✅ GET OLD FEEDBACKS
    let feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');

    // ✅ CREATE NEW FEEDBACK OBJECT
    let data = {
      rating: this.rating,
      message: this.message,
      comment: this.comment,
      date: new Date()
    };

    // ✅ PUSH + SAVE
    feedbacks.push(data);

    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    alert("Thanks for feedback ✅");

    // reset form
    this.rating = 0;
    this.comment = "";
    this.message = "Click on stars to rate";
  }


  home() {

    this.route.navigate(['home'])

  }
}
