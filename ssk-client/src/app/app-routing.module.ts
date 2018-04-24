import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';     // Add this
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';  // Add this
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin/admindashboard.component';
import { UserDashboardComponent } from './dashboard/user/userdashboard.component';

import { AuthGuardAdmin } from './gaurds/auth.admin.gaurd';
import { AuthGuardUser } from './gaurds/auth.user.gaurd';
import { AuthGuardLogin } from './gaurds/auth.login.gaurd';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'product', pathMatch: 'full',
    component: ProductComponent
  },
  {
    path: 'register', pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: 'login', pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardLogin],
    children: [ 
	    {
	       path: 'user',
         component: UserDashboardComponent,
         canActivate: [AuthGuardUser]
	    },
	    {
	       path: 'admin',
         component: AdminDashboardComponent,
         canActivate: [AuthGuardAdmin]
	     }	
	   ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
