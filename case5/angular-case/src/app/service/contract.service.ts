import {Injectable} from '@angular/core';
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractList: Contract[] = [

    {
      contractId: 1,
      startDate: '2022-10-21',
      endDate: '2022-10-22',
      deposit: 0,
      customer: {
        customerId: 1,
        customerName: 'Võ Văn Tý',
        customerDateOfBirth: '2001-11-20',
        customerGender: 'Nam',
        customerIdCard: 1232131,
        customerPhoneNumber: '0901111111',
        customerEmail: 'cu.ty@gmail.com',
        customerAddress: 'bản LắkKonKu, Gia Lai',
        customerType: 'Gold'
      },
      facility: {
        facilityId: 2,
        facilityName: 'Villa Beach Back Jquery',
        facilityArea: 1200,
        rentCost: 7500000,
        maxPeople: 7,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 80,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/02/8e/d7/b8.jpg'
      }
    },
    {
      contractId: 3,
      startDate: '2022-10-22',
      endDate: '2022-10-23',
      deposit: 800000,
      customer: {
        customerId: 6,
        customerName: 'Hồ Văn Nam',
        customerDateOfBirth: '1993-07-26',
        customerGender: 'LGBT',
        customerIdCard: 123123,
        customerPhoneNumber: '0906666666',
        customerEmail: 'ngoc.huyen@gmail.com',
        customerAddress: 'núi Thần Tài, Quảng Nam',
        customerType: 'Diamond'
      },
      facility: {
        facilityId: 4,
        facilityName: 'Villa Beach Front Thymeleaf',
        facilityArea: 2000,
        rentCost: 10500000,
        maxPeople: 8,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 100,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://pix10.agoda.net/hotelImages/2601996/0/7b0a95ae1cbf0f0650ff89ff15cbfbfb.jpg?ca=7&ce=1&s=1024x768'
      }
    },
    {
      contractId: 5,
      startDate: '2022-10-23',
      endDate: '2022-10-24',
      deposit: 0,
      customer: {
        customerId: 5,
        customerName: 'Đặng Ngọc Huy',
        customerDateOfBirth: '1998-10-20',
        customerGender: 'LGBT',
        customerIdCard: 123213,
        customerPhoneNumber: '0905555555',
        customerEmail: 'huy3D@gmail.com',
        customerAddress: 'chợ Miếu Bông, Quảng Nam',
        customerType: 'Member'
      },
      facility: {
        facilityId: 4,
        facilityName: 'Villa Beach Back Jquery',
        facilityArea: 1200,
        rentCost: 7500000,
        maxPeople: 7,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 80,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/02/8e/d7/b8.jpg'
      }
    },
    {
      contractId: 6,
      startDate: '2022-10-20',
      endDate: '2022-10-21',
      deposit: 120000,
      customer: {
        customerId: 2,
        customerName: 'Hồ Thị Thủy Lợi',
        customerDateOfBirth: '1997-02-14',
        customerGender: 'LGBT',
        customerIdCard: 1231231,
        customerPhoneNumber: '0902222222',
        customerEmail: 'ho.thuy.loi@gmail.com',
        customerAddress: 'chùa Linh Ứng, Đà Nẵng',
        customerType: 'Diamond'
      },
      facility: {
        facilityId: 5,
        facilityName: 'Villa Beach Front Thymeleaf',
        facilityArea: 2000,
        rentCost: 10500000,
        maxPeople: 8,
        standardRoom: 'Vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 100,
        numberOfFloors: 4,
        facilityFree: '',
        rentType: 'Ngày',
        facilityType: 'Villa',
        facilityImage: 'https://pix10.agoda.net/hotelImages/2601996/0/7b0a95ae1cbf0f0650ff89ff15cbfbfb.jpg?ca=7&ce=1&s=1024x768'
      }
    }
  ];

  getAll() {
    return this.contractList;
  }

  constructor() {
  }
}
