import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationFormGroup: FormGroup;

  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'USA'}
  ]


  constructor() {
  }

  ngOnInit(): void {
    this.registrationFormGroup = new FormGroup({
      email: new FormControl('', Validators.email),
      country: new FormControl('',Validators.required),
      birthOfDay: new FormControl('', this.checkAge),
      gender: new FormControl('',Validators.required),
      phoneNumber: new FormControl('', Validators.pattern('^[+]84\\d{9,10}$')),
      pwGroup: new FormGroup({
        firstPassWord: new FormControl('',[Validators.minLength(6),Validators.required]),
        confirmPassword: new FormControl('',Validators.minLength(6)),
      },this.checkPassword)
    })
  }

  checkAge(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substring(0, 4));

    const curYear = new Date().getFullYear();

    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  checkPassword(passWordControl: AbstractControl): any {
    const password = passWordControl.value;
    return (password.firstPassWord === password.confirmPassword) ? null : {notSame: true}
  }


  registrationForm(): void {
    console.log(this.registrationFormGroup.value);
  }
}
