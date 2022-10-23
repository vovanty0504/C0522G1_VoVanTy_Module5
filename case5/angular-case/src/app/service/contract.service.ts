import {Injectable} from '@angular/core';
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractList: Contract[] = [{
    contractId: 1,
    contractStartDate: '2020-12-08',
    contractEndDate: '2020-12-08',
    contractDeposit: '200000',
    employee: 'Võ Văn Tý',
    customer: 'Thủy Điên',
    facility: 'Villa Beach Front',
    isDelete: true
  },
    {
      contractId: 2,
      contractStartDate: '2020-12-08',
      contractEndDate: '2020-12-08',
      contractDeposit: '200000',
      employee: 'Võ Văn Tý',
      customer: 'Thủy Điên',
      facility: 'Villa Beach Front',
      isDelete: true
    },
    {
      contractId: 3,
      contractStartDate: '2020-12-08',
      contractEndDate: '2020-12-08',
      contractDeposit: '200000',
      employee: 'Võ Văn Tý',
      customer: 'Thủy Điên',
      facility: 'Villa Beach Front',
      isDelete: true
    },
    {
      contractId: 4,
      contractStartDate: '2020-12-08',
      contractEndDate: '2020-12-08',
      contractDeposit: '200000',
      employee: 'Võ Văn Tý',
      customer: 'Thủy Điên',
      facility: 'Villa Beach Front',
      isDelete: true
    },
    {
      contractId: 5,
      contractStartDate: '2020-12-08',
      contractEndDate: '2020-12-08',
      contractDeposit: '200000',
      employee: 'Võ Văn Tý',
      customer: 'Thủy Điên',
      facility: 'Villa Beach Front',
      isDelete: true
    }
  ];

  getAll() {
    return this.contractList;
  }

  constructor() {
  }
}
