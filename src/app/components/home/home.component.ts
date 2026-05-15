import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchText = ""   // ✅ FIX

  images: string[] = [
    'https://img.lovepik.com/free-template/bg/20200922/bg/89f62409cf6c4_415671.png_list.jpg',
    'https://i.pinimg.com/originals/21/2d/57/212d57e1c725204a1e34369dd3f92113.png',
    'https://i.pinimg.com/originals/32/92/26/32922628d4b01b32d31eb9d42afc0f55.jpg',
    'https://masterbundles.com/wp-content/uploads/2023/03/specieal-offer-850.jpg'
  ];

  constructor(private router: Router, private auth: AuthService) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 50) {
        section.classList.add('visible');
      }
    });
  }

  logout(){
    this.auth.logout();
  }

}