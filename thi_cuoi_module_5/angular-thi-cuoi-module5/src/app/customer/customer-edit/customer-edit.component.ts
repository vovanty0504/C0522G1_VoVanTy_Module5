import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerType} from '../../model/customer-type';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {


  customer: Customer;
  formEditCustomer: FormGroup;
  customerTypeList: CustomerType[] = [];
  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.customerService.findById(id).subscribe(value => {
      this.customer = value;
      this.formEditCustomer.patchValue(value);
    });
    this.formEditCustomer = new FormGroup({
      id: new FormControl('', Validators.required),
      customerName: new FormControl('', Validators.required),
      customerBirthday: new FormControl('', this.checkMinAge18AndMaxAge80),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$|^\\d{12}$')]),
      customerPhone: new FormControl('', [Validators.required, Validators.pattern('(0|[(]84[)][+])9[01]\\d{7}')]),
      customerEmail: new FormControl('', Validators.email),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl()
    });
    this.getAllCustomerType();
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  submitUpdate() {
    const customerObj = this.formEditCustomer.value;
    this.customerService.update(customerObj).subscribe(value => {
      Swal.fire({
        icon: 'success',
        title: 'Cập nhập thành công!',
        text: 'Khách hàng: ' + this.customer.customerName,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.router.navigateByUrl('');
    });
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }

}
