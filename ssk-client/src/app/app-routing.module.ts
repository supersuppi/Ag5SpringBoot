import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';  // Add this

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about', pathMatch: 'full',
    component: AboutComponent
  },
  {
    path: 'register', pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: 'login', pathMatch: 'full',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
