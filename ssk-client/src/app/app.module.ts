import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//Required for toast notification
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';

//Import gaurds
import { AuthGuardAdmin } from './gaurds/auth.admin.gaurd';
import { AuthGuardLogin } from './gaurds/auth.login.gaurd';
import { AuthGuardUser } from './gaurds/auth.user.gaurd';

//Import services
import { ToastNotificationService, AuthenticationService, RegistrationService } from './services/index';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin/admindashboard.component';
import { UserDashboardComponent } from './dashboard/user/userdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    DashboardComponent,
    AdminDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    RegistrationService,
    ToastNotificationService, 
    AuthenticationService,
    AuthGuardAdmin,
    AuthGuardLogin,
    AuthGuardUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
