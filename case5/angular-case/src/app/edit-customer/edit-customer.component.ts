import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customers: Customer;
  formEditCustomer: FormGroup;
  customerTypeList = [
    {id:1, name:"normal"},
    {id:2, name:"Diamond"},
  ]

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id)
    this.customers = this.customerService.finById(id);

    this.formEditCustomer = new FormGroup({
      customerId: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.pattern('^[a-z A-Z]{1,50}$')),
      customerDateOfBirth: new FormControl('', Validators.required),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})')),
      customerPhoneNumber: new FormControl('', Validators.pattern('^((0|[(]84[)][+])9[01]\\d{7})')),
      customerEmail: new FormControl('', Validators.email),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required)
    });
    this.formEditCustomer.patchValue(this.customers)
  }

  updateCustomer(){
    const customer = this.formEditCustomer.value;
    this.customerService.editCustomer(customer.id,customer)
    this.router.navigateByUrl('customer/list');
  }

}
