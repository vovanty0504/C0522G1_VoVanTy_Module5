import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerListPaging: Customer[];
  numberRecord = 5;
  curPage = 1;
  totalPage: number;
  customerTypeList: CustomerType[];


  customerNameDelete: string;
  customerIdDelete: number;

  customerNameSearch = '';
  customerAddressSearch = '';
  customerPhoneSearch = '';
  customerTypeSearch: CustomerType = {id: 6, customerTypeName: ''};


  constructor(private customerService: CustomerService) {

  }


  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    });

    this.customerService.findAllCustomerSearch(this.customerNameSearch, this.customerAddressSearch,
      this.customerPhoneSearch, this.customerTypeSearch.customerTypeName)
      .subscribe(list => {
        this.totalPage = Math.ceil(list.length / this.numberRecord);
      }, error => {
        console.log(error);
      }, () => {
        console.log('OK!');
      });

    this.customerService.findAllSearchPaging(this.numberRecord, this.curPage,
      this.customerNameSearch, this.customerAddressSearch, this.customerPhoneSearch
      , this.customerTypeSearch.customerTypeName).subscribe(pagingList => {
      this.customerListPaging = pagingList;
    }, error => {
      console.log(error);
    }, () => {
      console.log('Hiển thị khách hàng ở trang ' + this.curPage);
    });

  }

  next(): void {
    this.curPage++;
    this.ngOnInit();
  }

  previous(): void {
    this.curPage--;
    this.ngOnInit();
  }

  searchByMore() {
    this.curPage = 1;
    this.ngOnInit();
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  resetSearchInput(): void {
    this.customerNameSearch = '';
    this.customerAddressSearch = '';
    this.customerPhoneSearch = '';
    this.customerTypeSearch = {id: 6, customerTypeName: ''};
    this.curPage = 1;
    this.ngOnInit();
  }

  getInfoDelete(customerName: string, customerId: number) {
    this.customerIdDelete = customerId;
    this.customerNameDelete = customerName;
  }


  deleteCustomer(): void {
    this.customerService.delete(this.customerIdDelete).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Xóa thành công!',
        text: 'Khách hàng: ' + this.customerNameDelete,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

      this.ngOnInit();

    }, error => {
      console.log(error);
    }, () => {
      console.log('Xóa khách hàng thành công!');
    });
  }


}
