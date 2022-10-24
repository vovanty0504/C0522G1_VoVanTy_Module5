import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL_PRODUCT = "http://localhost:3000/product";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL_PRODUCT);
  }

  saveProduct(product): Observable<Product> {
    return this.http.post<Product>(this.API_URL_PRODUCT, product);
  }

  findById(id: number): Observable<Product> {
    return this.http.get<Product>(this.API_URL_PRODUCT + "/" + id);
  }

  update(product: Product): Observable<void> {
    return this.http.patch<void>(this.API_URL_PRODUCT + "/" + product.id, product);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API_URL_PRODUCT + "/" + id);
  }
}
