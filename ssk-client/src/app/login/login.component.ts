import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import "rxjs/add/operator/takeUntil";
import { Subject } from "rxjs/Subject";

import { ToastNotificationService, AuthenticationService } from '../services/index';

import { User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private model: any = {};
  private loading = false;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: ToastNotificationService) { }

  ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

  login() {
      this.loading = true;
      this.authenticationService.login(this.model.email, this.model.password)
            .takeUntil(this.unsubscribe) // to unsbuscribe when done
            .subscribe((user:User) => {
              this.handleSuccess(user);
            },
            error => {
                this.alertService.showError('Login failed');
                console.log(error);
                this.loading = false;
            });
  }

  private handleSuccess (user:User) {
    this.alertService.showSuccess('Login sucsess. Welcome '+user.username);
    
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('loggedin', "true");
    //let app:User = JSON.parse(localStorage.getItem('user'));

    // redirect to dashboard
    this.router.navigate(['/dashboard']);
    this.loading = false;
  }

  //IMPORTANT: to avoid memory leak
  OnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
}  

}
