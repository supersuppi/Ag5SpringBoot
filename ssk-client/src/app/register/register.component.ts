import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';

import { RegistrationService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegistrationService] //Add this
})
export class RegisterComponent implements OnInit {
  private regForm: FormGroup;

  constructor(private regService:RegistrationService) { }

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
    .subscribe( book => { console.log('Registration Successfull');},
                error => {console.log("Registration Failed with ERROR :"+error) } 
              );
    
    // console.log('Form successful submit.');
    // console.log(this.regForm.value);
  }

}
