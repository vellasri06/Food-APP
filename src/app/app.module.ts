import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PreferencesComponent } from './components/preference/preference.component';
import { PaymentComponent } from './components/payment/payment.component';
import { QueueComponent } from './components/queue/queue.component';
import { SpecialsComponent } from './components/specials/specials.component';
import { RatingsComponent } from './components/ratings/ratings.component';
import { NutritionComponent } from './components/nutrition/nutrition.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/order/order.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { CommonModule } from '@angular/common';
import { RegComponent } from './components/reg/reg.component';
import { LoginComponent } from './components/login/login.component';
import { OffersComponent } from './components/offers/offers.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';
const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'specials', component: SpecialsComponent },
  { path: 'ratings', component: RatingsComponent },
  { path: 'preference', component: PreferencesComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'nutrition', component: NutritionComponent },
  { path: 'cart', component: CartComponent },
  {path:'admin', component:AdminComponent},
  {path:'login',component:LoginComponent},
  {path:'thanks',component:ThanksComponent},
  {path:'feedback',component:RatingsComponent},
  {path:'register',component:RegComponent},
  {path:'offers',component:OffersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'history',component:HistoryComponent},
  {path:'adminprofile',component:AdminprofileComponent ,canActivate:[AuthGuard]},
  { path: '**', component: NotfoundComponent } // Always last
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PreferencesComponent,
    PaymentComponent,
    QueueComponent,
    SpecialsComponent,
    RatingsComponent,
    NutritionComponent,
    CartComponent,
    OrdersComponent,
    NotfoundComponent,
    AdminComponent,
    AdminprofileComponent,
    ThanksComponent,
    RegComponent,
    LoginComponent,
    OffersComponent,
    ProfileComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }