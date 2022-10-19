import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()
  eventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  senToMess(): void {
    this.eventEmitter.emit('hello');
  }
}
