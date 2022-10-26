import {Injectable} from '@angular/core';
import {Customer} from "../../model/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_URl = "http://localhost:3000/customers";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URl)
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(this.API_URl, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.API_URl + "/" + id);
  }

  updateCustomer(customer: Customer): Observable<void> {
    console.log(customer)
    return this.http.patch<void>(this.API_URl + "/" + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.API_URl + "/" + id);
  }


}
