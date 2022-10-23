import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  formCreateCustomer: FormGroup;
  customerTypeList = [
    {id:1, name:"normal"},
    {id:2, name:"Diamond"},
  ]

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formCreateCustomer = new FormGroup({
      customerId: new FormControl('',Validators.required),
      customerName: new FormControl('',Validators.pattern('^[a-z A-Z]{1,50}$')),
      customerDateOfBirth: new FormControl('',Validators.required),
      customerGender: new FormControl('',Validators.required),
      customerIdCard: new FormControl('',Validators.pattern('^(\\d{9}|\\d{12})')),
      customerPhoneNumber: new FormControl('',Validators.pattern('^((0|[(]84[)][+])9[01]\\d{7})')),
      customerEmail: new FormControl('',Validators.email),
      customerAddress: new FormControl('',Validators.required),
      customerType: new FormControl('',Validators.required)
    })
  }

  createCustomer(): void {
    const customers = this.formCreateCustomer.value;
    this.customerService.saveCustomer(customers);
    this.formCreateCustomer.reset();
    this.router.navigateByUrl('customer/list');
  }
}
