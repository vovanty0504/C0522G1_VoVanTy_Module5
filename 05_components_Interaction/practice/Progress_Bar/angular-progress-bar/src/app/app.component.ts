import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-progress-bar';

  a: string;

  receiveFormChild(value: any) {
    this.a =  value;
  }
}
