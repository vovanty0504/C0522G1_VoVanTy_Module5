import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../service/facility.service";
import {CustomerService} from "../service/customer.service";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contractFormGroup: FormGroup = new FormGroup({
    contractId: new FormControl(''),
    dateFormGroup: new FormGroup({
      startDate: new FormControl('', this.checkStartDate),
      endDate: new FormControl('')
    }, this.checkEndDate),
    deposit: new FormControl('', [Validators.required, Validators.pattern('^0$|^[1-9]\\d*$')]),
    customer: new FormControl('', Validators.required),
    facility: new FormControl('', Validators.required)
  });

  customerList = this.customerService.getAll();
  facilityList = this.facilityService.getAll().filter(item => {
    return (item.facilityType === 'Villa' || item.facilityType === 'House');
  });

  idAuto = this.contractService.getAll()[this.contractService.getAll().length - 1].contractId + 1;

  curDate = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();

  constructor(private facilityService: FacilityService,
              private customerService: CustomerService,
              private contractService: ContractService) {
  }

  ngOnInit(): void {
  }

  checkStartDate(abstractControl: AbstractControl): any {
    const formYear = new Date(abstractControl.value).getFullYear();
    const formMonth = new Date(abstractControl.value).getMonth() + 1;
    const formDay = new Date(abstractControl.value).getDate();

    if (formYear > new Date().getFullYear()) {
      return null;
    }

    if (formYear < new Date().getFullYear()) {
      return {invalidStartDate: true};
    }

    if (formMonth > new Date().getMonth() + 1) {
      return null;
    }

    if (formMonth < new Date().getMonth() + 1) {
      return {invalidStartDate: true};
    }

    return (formDay >= new Date().getDate()) ? true : {invalidStartDate: true};
  }

  checkEndDate(abstractControl: AbstractControl): any {
    const formStartYear = new Date(abstractControl.value.startDate).getFullYear();
    const formStartMonth = new Date(abstractControl.value.startDate).getMonth() + 1;
    const formStartDay = new Date(abstractControl.value.startDate).getDate();

    const formEndYear = new Date(abstractControl.value.endDate).getFullYear();
    const formEndMonth = new Date(abstractControl.value.endDate).getMonth() + 1;
    const formEndDay = new Date(abstractControl.value.endDate).getDate();

    if (formEndYear > formStartYear) {
      return null;
    }

    if (formEndYear < formStartYear) {
      return {invalidEndDate: true};
    }

    if (formEndMonth > formStartMonth) {
      return null;
    }

    if (formEndMonth < formStartMonth) {
      return {invalidEndDate: true};
    }

    return (formEndDay >= formStartDay) ? true : {invalidEndDate: true};
  }

  submit() {

  }
}
