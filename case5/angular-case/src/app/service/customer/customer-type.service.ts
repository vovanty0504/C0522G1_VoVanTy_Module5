import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../../model/customer-type";

const URL_API = 'http://localhost:8080/customer';

@Injectable({
  providedIn: 'root'
})


export class CustomerTypeService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(URL_API + '/rank');
  }
}
