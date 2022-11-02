import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import Swal from 'sweetalert2';
import {CustomerService} from "../../service/customer/customer.service";
import {BehaviorSubject, Observable} from "rxjs";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  delName: string;
  delId: number;
  page = 1;
  pageSize = 10;
  name = '';
  total$: Observable<number>;
  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getCustomer(this.name, this.page, this.pageSize).subscribe(value => {
        console.log(value);
        this.customers$ = new BehaviorSubject<Customer[]>(value.content);
        this.total$ = new BehaviorSubject<number>(value.totalElements);
        // console.log(value.number);
      },
      error => {
      });
  }

  deleteConfirm(customer: Customer) {
    console.log(customer);
    this.delName = customer.customerName;
    this.delId = customer.id;
  }

  delete() {
    this.customerService.deleteObject(this.delId).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Delete successfully!',
        text: 'Customer: ' + this.delName,
        showConfirmButton: false,
        timer: 2500
      });
      this.getAllCustomer();
      // confirm('Delete successfully!\n' + this.delName);
    });

  }
}

