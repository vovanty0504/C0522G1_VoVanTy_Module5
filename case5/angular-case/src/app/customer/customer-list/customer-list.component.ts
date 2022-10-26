import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];

  customerListPaging: Customer[];
  curPage = 1;
  totalPage: number;


  constructor(private customerService: CustomerService) {
  }


  ngOnInit(): void {
    this.customerService.getAll().subscribe(value => {
      this.totalPage = Math.ceil(value.length / 5);
      this.customerListPaging = value.slice(0, 5);
      this.customerList = value;
    });
  }

  next(): void {
    this.curPage++;
    this.customerListPaging = this.customerList.slice((this.curPage - 1) * 5, this.curPage * 5);
  }

  previous(): void {
    this.curPage--;
    this.customerListPaging = this.customerList.slice((this.curPage - 1) * 5, this.curPage * 5);
  }
}

