import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_URl = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }


  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URl + "customers", customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URl + "customers/" + id);
  }

  updateCustomer(customer: Customer): Observable<void> {
    console.log(customer)
    return this.http.patch<void>(this.API_URl + "customers/" + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.API_URl + "customers/" + id);
  }

  findAllCustomerSearch(nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URl +
      'customers?customerName_like=' + nameSearch + '&customerAddress_like=' +
      addressSearch + '&customerPhone_like=' + phoneSearch);
  }

  findCustomerSearchPaging(numberRecord: number, curPage: number,
                           nameSearch: string, addressSearch: string, phoneSearch: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URl + 'customers?_page=' + curPage + '&_limit=' + numberRecord +
      '&customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch + '&customerPhone_like=' + phoneSearch);
  }

}
