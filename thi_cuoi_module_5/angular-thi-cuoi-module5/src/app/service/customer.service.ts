import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.API_URL + 'customerType');
  }


  findAllCustomerSearch(nameSearch: string, phoneSearch: string, addressSearch: string, typeSearch: string):
    Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + 'customers?customerName_like=' + nameSearch +
      '&customerPhone_like=' + phoneSearch + '&customerAddress_like=' + addressSearch +
      '&customerType.customerTypeName_like=' + typeSearch);
  }

  findAllSearchPaging(numberRecord: number, curPage: number,
                      nameSearch: string, addressSearch: string, phoneSearch: string, typeSearch: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL + 'customers?_page=' + curPage + '&_limit=' + numberRecord +
      ' &customerName_like=' + nameSearch + '&customerAddress_like=' + addressSearch +
      '&customerPhone_like=' + phoneSearch + '&customerType.customerTypeName_like=' + typeSearch);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URL + 'customers/' + id);
  }

  update(customer: Customer): Observable<void> {
    return this.http.patch<void>(this.API_URL + 'customers/' + customer.id, customer);
  }

  createCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL + 'customers', customer);
  }

  delete(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.API_URL + 'customers/' + id);
  }


}
