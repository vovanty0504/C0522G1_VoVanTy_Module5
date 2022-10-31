import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  formCreateCustomer: FormGroup;
  customerTypeList: CustomerType[] = [];
  minAge = (new Date().getFullYear() - 80) + '-01-01';
  maxAge = (new Date().getFullYear() - 18) + '-12-31';

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  getAllCustomerType() {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });
  }


  ngOnInit(): void {
    this.formCreateCustomer = new FormGroup({
      customerName: new FormControl('', Validators.pattern('^[a-z A-Z]{1,50}$')),
      customerBirthday: new FormControl('', this.checkMinAge18AndMaxAge80),
      customerGender: new FormControl('', Validators.required),
      customerIdCard: new FormControl('', Validators.pattern('^(\\d{9}|\\d{12})')),
      customerPhone: new FormControl('', Validators.pattern('^((0|[(]84[)][+])9[01]\\d{7})')),
      customerEmail: new FormControl('', Validators.email),
      customerAddress: new FormControl('', Validators.required),
      customerType: new FormControl('', Validators.required)
    });
    this.getAllCustomerType();
  }

  submitCreate(): void {
    const customers = this.formCreateCustomer.value;
    this.customerService.createCustomer(customers).subscribe(value => {
      Swal.fire({
        icon: 'success',
        title: 'Thêm Mới Thành Công!!',
        text: 'Khách hàng: ',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.formCreateCustomer.reset();
      this.router.navigateByUrl('');
    });
  }

  checkMinAge18AndMaxAge80(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();

    return (curYear - formYear >= 18 && curYear - formYear <= 80) ? null : {invalid18_80: true};
  }
}
