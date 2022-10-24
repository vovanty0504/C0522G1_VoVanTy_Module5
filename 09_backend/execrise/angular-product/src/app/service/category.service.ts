import {Injectable} from '@angular/core';
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private API_URL_CATEGORY = 'http://localhost:3000/category'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL_CATEGORY);
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(this.API_URL_CATEGORY, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(this.API_URL_CATEGORY + "/" + id);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.patch<Category>(this.API_URL_CATEGORY + "/" + category.id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(this.API_URL_CATEGORY + "/" + id);
  }
}
