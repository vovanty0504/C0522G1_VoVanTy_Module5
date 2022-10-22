import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  facilityList: Facility[] = [{
    facilityId: 1 ,
    facilityName: "Villa Beach Front",
    facilityArea: 2000,
    facilityCost: 2300000,
    facilityMaxPeople: 4,
    facilityStandardRoom: "normal",
    facilityDescriptionOtherConvenience: "Có hồ bơi,",
    facilityPoolArea: 500,
    facilityNumberOfFloors: 5,
    facilityFree: "1 Xe máy, 1 Xe đạp",
    isDelete: true},

    {
     facilityId: 2 ,
    facilityName: "House Princess 02",
    facilityArea: 2000,
    facilityCost: 2300000,
    facilityMaxPeople: 4,
    facilityStandardRoom: "normal",
    facilityDescriptionOtherConvenience: "Có hồ bơi,",
    facilityPoolArea: 500,
    facilityNumberOfFloors: 5,
    facilityFree: "1 Xe máy, 1 Xe đạp",
    isDelete: true},

    {
    facilityId: 3 ,
    facilityName: "Villa No Beach Front",
    facilityArea: 2000,
    facilityCost: 2300000,
    facilityMaxPeople: 4,
    facilityStandardRoom: "normal",
    facilityDescriptionOtherConvenience: "Có hồ bơi,",
    facilityPoolArea: 500,
    facilityNumberOfFloors: 5,
    facilityFree: "1 Xe máy, 1 Xe đạp",
    isDelete: true
  },

    {
      facilityId: 4 ,
      facilityName: "Room Twin 01",
      facilityArea: 2000,
      facilityCost: 2300000,
      facilityMaxPeople: 4,
      facilityStandardRoom: "normal",
      facilityDescriptionOtherConvenience: "Có hồ bơi,",
      facilityPoolArea: 500,
      facilityNumberOfFloors: 5,
      facilityFree: "1 Xe máy, 1 Xe đạp",
      isDelete: true
    },

    {
      facilityId: 5 ,
      facilityName: "House Princess 01",
      facilityArea: 2000,
      facilityCost: 2300000,
      facilityMaxPeople: 4,
      facilityStandardRoom: "normal",
      facilityDescriptionOtherConvenience: "Có hồ bơi,",
      facilityPoolArea: 500,
      facilityNumberOfFloors: 5,
      facilityFree: "1 Xe máy, 1 Xe đạp",
      isDelete: true
    },
  ]

  getAll(){
     return this.facilityList;
  }

  constructor() {
  }
}
