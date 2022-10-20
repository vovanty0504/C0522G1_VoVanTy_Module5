import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css']
})
export class ReativeFormComponent implements OnInit {

  formReactive: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
    this.formReactive = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6))
    });
  }

  registrationForm() {
    console.log(this.formReactive.value);

  }
}
