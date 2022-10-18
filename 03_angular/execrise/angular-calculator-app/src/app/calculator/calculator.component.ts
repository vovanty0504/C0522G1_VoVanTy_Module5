import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber: 5;
  secondNumber: number;
  result: any;

  constructor() {
  }


  ngOnInit(): void {
  }

  resultSum(operator: string) {
    switch (operator) {
      case'+' :
        return this.result = this.firstNumber + this.secondNumber;
      case '-':
        return this.result = this.firstNumber - this.secondNumber;
      case '*':
        return this.result = this.firstNumber * this.secondNumber;
      case '/':
        if (this.secondNumber === 0) {
          return this.result = 'không được phép chia 0';
        }
        return this.result = this.firstNumber / this.secondNumber;
    }
  }
}
