import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";
import {FacilityType} from "../model/facility-type";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  findAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API_URL + 'facilities');
  }

  findAllFacilitySearch(nameSearch: string): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API_URL + 'facilities?facilityName_like=' + nameSearch);
  }

  findFacilitySearchPaging(numberRecord: number, curPage: number, nameSearch: string): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(this.API_URL + 'facilities?_page=' + curPage + '&_limit=' + numberRecord +
      '&facilityName_like=' + nameSearch);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(this.API_URL + 'facilities/' + id);
  }

  findAllFacilityType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(this.API_URL + 'facilityTypes');
  }

  findAllRentType(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.API_URL + 'RentTypes');
  }

  addFacility(facility): Observable<Facility> {
    return this.httpClient.post<Facility>(this.API_URL + 'facilities', facility);
  }

  getById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(this.API_URL + 'facilities/' + id);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(this.API_URL + 'facilities/' + id, facility);
  }
}
