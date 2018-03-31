import { Component,ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import {AuthenticationService } from './services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Add this for toast notification to work from service
  constructor(public toastr: ToastsManager, vRef: ViewContainerRef, private router: Router,
    private authenticationService: AuthenticationService) {
      this.toastr.setRootViewContainerRef(vRef);
    }

    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }

    isLoggedIn(){
     console.log('Logged IN:'+this.authenticationService.isLoggedIn());
     return this.authenticationService.isLoggedIn();
    }
}
