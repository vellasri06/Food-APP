import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  { path: 'login', component: AdminComponent },

  {
    path: 'adminprofile',
    component: AdminprofileComponent,
    canActivate: [AuthGuard]   // ✅ MUST BE HERE
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}