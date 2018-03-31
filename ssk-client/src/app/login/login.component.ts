import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastNotificationService, AuthenticationService } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

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
            .subscribe((res:Response) => {
              localStorage.setItem('token', res.headers.get("Authorization"));
              localStorage.setItem('loggedin', "true");
              // redirect to dashboard
              this.router.navigate(['/dashboard']);
            },
              error => {
                  this.alertService.showError(error);
                  this.loading = false;
              });
  }

}
