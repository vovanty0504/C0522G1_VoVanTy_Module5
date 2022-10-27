import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerType} from "../../model/customer-type";
import Swal from 'sweetalert2';
import {CustomerService} from "../../service/customer/customer.service";
import {CustomerTypeService} from "../../service/customer/customer-type.service";



@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']

})
export class EditCustomerComponent implements OnInit {

  customers: Customer;
  formEditCustomer: FormGroup;
  customerTypeList: CustomerType[] = [];

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypeList = value;
    })
  }

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(id).subscribe(value => {
      this.customers = value
      console.log(value)
      this.formEditCustomer.patchValue(value);
    })
    this.formEditCustomer = new FormGroup({
      id: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.required),
      customerBirthday: new FormControl('', Validators.required),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})')),
      customerPhone: new FormControl('', Validators.pattern('^((0|[(]84[)][+])9[01]\\d{7})')),
      customerEmail: new FormControl('', Validators.email),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl()
    });
    this.getAllCustomerType();
  }


  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }


  updateCustomer() {
    const customerObj = this.formEditCustomer.value;
    this.customerService.updateCustomer(customerObj).subscribe(value => {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhập thành công!',
        text: 'Khách hàng: ' + this.customers.customerName,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.router.navigateByUrl('customer/list');
    })
  }

}
