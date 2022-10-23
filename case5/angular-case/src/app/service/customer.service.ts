import {Injectable} from '@angular/core';
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList: Customer[] = [{
    customerId: 1,
    customerName: "Nguyễn Thị Hào",
    customerDateOfBirth: "1970-11-07",
    customerGender: "Nữ",
    customerIdCard: 643431213,
    customerPhoneNumber: "0945423362",
    customerEmail: "thihao07@gmail.com",
    customerAddress: "23 Nguyễn Hoàng, Đà Nẵng",
    customerType: "Diamond",
    isDelete: true
  },

    {
      customerId: 2,
      customerName: "Phạm Xuân Diệu",
      customerDateOfBirth: "1992-08-08",
      customerGender: "Nữ",
      customerIdCard: 865342123,
      customerPhoneNumber: "0954333333",
      customerEmail: "xuandieu92@gmail.com",
      customerAddress: "K77/22 Thái Phiên, Quảng Trị",
      customerType: "Diamond",
      isDelete: true
    },
    {
      customerId: 3,
      customerName: "Trương Đình Nghệ",
      customerDateOfBirth: "1990-02-27",
      customerGender: "Nữ",
      customerIdCard: 488645199,
      customerPhoneNumber: "0373213122",
      customerEmail: "thihao07@gmail.com",
      customerAddress: "K323/12 Ông Ích Khiêm, Vinh",
      customerType: "Diamond",
      isDelete: true
    },
    {
      customerId: 4,
      customerName: "Dương Văn Quan",
      customerDateOfBirth: "1970-11-07",
      customerGender: "Nam",
      customerIdCard: 543432111,
      customerPhoneNumber: "0490039241",
      customerEmail: "duongquan@gmail.com",
      customerAddress: "K453/12 Lê Lợi, Đà Nẵng",
      customerType: "Diamond",
      isDelete: true
    },
    {
      customerId: 5,
      customerName: "Hoàng Trần Nhi Nhi",
      customerDateOfBirth: "1995-12-09",
      customerGender: "Nữ",
      customerIdCard: 795453345,
      customerPhoneNumber: "0312345678",
      customerEmail: "nhinhi123@gmail.com",
      customerAddress: "224 Lý Thái Tổ, Gia Lai",
      customerType: "Diamond",
      isDelete: true
    }]


  getAll() {
    return this.customerList;
  }

  saveCustomer(customer) {
    this.customerList.push(customer);
  }

  finById(id: number): Customer {
    return this.customerList.find(customer => customer.customerId === id)
  }

  editCustomer(id: number, customer: Customer) {
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].customerId == id){
        this.customerList[i] = customer;
      }
        }

  }

  constructor() {
  }
}
