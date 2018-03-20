import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { RegistrationService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegistrationService] //Add this
})
export class RegisterComponent implements OnInit {
  private regForm: FormGroup;

  constructor(private regService:RegistrationService,private router:Router) { }

  ngOnInit() {
    // Each will create new Form control.
    this.regForm = new FormGroup({
      'firstName': new FormControl(),
      'lastName': new FormControl(),
      'phone': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
      'city': new FormControl(),
      'country': new FormControl(),

      'payment': new FormGroup({
        'cardNumber': new FormControl(),
        'cardExpDate': new FormControl()
      })
    });
  }

  onSubmit(sampleForm: NgForm) {
    this.regService.resgisterAPICall(this.regForm.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(["/home"]); 
      },
      err => {
        console.log("Error occured while registering user.");
      }
    );
  }

}
