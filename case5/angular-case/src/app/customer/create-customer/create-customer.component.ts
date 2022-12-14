import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerType} from "../../model/customer-type";
import Swal from 'sweetalert2';
import {Customer} from "../../model/customer";
import {CustomerService} from "../../service/customer/customer.service";
import {CustomerTypeService} from "../../service/customer/customer-type.service";



@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer;

  formCreateCustomer: FormGroup;
  customerTypeList: CustomerType[] = []

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;
    })
  }

  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    this.formCreateCustomer = new FormGroup({
      customerName: new FormControl('', Validators.pattern('^[a-z A-Z]{1,50}$')),
      customerBirthday: new FormControl('', Validators.required),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})')),
      customerPhone: new FormControl('', Validators.pattern('^((0|[(]84[)][+])9[01]\\d{7})')),
      customerEmail: new FormControl('', Validators.email),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required)
    });
    this.getAllCustomerType();
  }

  createCustomer(): void {
    const customers = this.formCreateCustomer.value;
    this.customerService.addNew(customers).subscribe(value => {
      Swal.fire({
        icon: 'success',
        title: 'Thêm Mới Thành Công!!',
        text: 'Khách hàng: ' ,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.formCreateCustomer.reset();
      this.router.navigateByUrl('customer/list');

    })
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
