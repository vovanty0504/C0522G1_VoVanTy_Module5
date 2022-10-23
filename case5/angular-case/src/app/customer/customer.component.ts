import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../service/customer.service";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerList: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  getAll() {
    return this.customerList = this.customerService.getAll();
  }

  ngOnInit(): void {
    this.getAll();
  }

}
