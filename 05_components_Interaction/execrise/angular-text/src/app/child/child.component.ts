import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  receiveData: string;

  @Output()
  eventEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  senTomess(): void {
    this.eventEmitter.emit('hello');
  }

}
