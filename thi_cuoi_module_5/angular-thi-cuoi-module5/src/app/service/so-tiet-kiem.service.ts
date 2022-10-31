import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {KhachHang} from '../model/khach-hang';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {SoTietKiem} from '../model/so-tiet-kiem';

@Injectable({
  providedIn: 'root'
})
export class SoTietKiemService {

  private API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }

  getAllKhachHang(): Observable<KhachHang[]> {
    return this.http.get<KhachHang[]>(this.API_URL + 'khachHang');
  }

  findAllSoTietKiemSearch(nameSearch: string):
    Observable<SoTietKiem[]> {
    return this.http.get<SoTietKiem[]>(this.API_URL +
      'soTietKiem?khachHang.name_like=' + nameSearch);
  }

  findAllSearchPaging(numberRecord: number, curPage: number,
                      nameSearch: string): Observable<SoTietKiem[]> {
    return this.http.get<SoTietKiem[]>(this.API_URL + 'soTietKiem?_page=' + curPage + '&_limit=' +
      numberRecord + '&khachHang.name_like=' + nameSearch);
  }

  findById(id: number): Observable<SoTietKiem> {
    return this.http.get<SoTietKiem>(this.API_URL + 'soTietKiem/' + id);
  }

  update(soTietKiem: SoTietKiem): Observable<void> {
    return this.http.patch<void>(this.API_URL + 'soTietKiem/' + soTietKiem.id, soTietKiem);
  }

  delete(id: number): Observable<SoTietKiem> {
    return this.http.delete<SoTietKiem>(this.API_URL + 'soTietKiem/' + id);
  }

}
