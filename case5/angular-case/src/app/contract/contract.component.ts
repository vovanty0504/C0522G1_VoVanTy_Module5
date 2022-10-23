import {Component, OnInit} from '@angular/core';
import {Contract} from "../model/contract";
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  contractList: Contract[] = [];

  constructor(private contractService: ContractService) {
  }

  getAll() {
    return this.contractList = this.contractService.getAll();
  }

  ngOnInit(): void {
    this.getAll();
  }

}
