import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';     // Add this
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';  // Add this
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin/admindashboard.component';
import { UserDashboardComponent } from './dashboard/user/userdashboard.component';

import { AuthGuard } from './gaurds/auth.gaurd';

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
    //canActivate: [AuthGuard],
    children: [ 
	    {
	       path: 'user',
	       component: UserDashboardComponent
	    },
	    {
	       path: 'admin',
	       component: AdminDashboardComponent
	     }	
	   ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
