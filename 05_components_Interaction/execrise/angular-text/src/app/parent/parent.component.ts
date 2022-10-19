import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, DoCheck {

  dataChild = 'ababas';

  a: string;

  constructor() {
  }

  ngOnInit(): void {
    console.log('innit....');
  }

  abc(value: any) {
    console.log(value);
    this.a = value;
  }

  ngDoCheck(): void {
    console.log('check....');
  }
}
