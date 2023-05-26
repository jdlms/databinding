import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'databinding';
  scoreArr: number[] = [];

  onIntervalFired(number: number) {
    this.scoreArr.push(number);
    console.log(this.scoreArr);
  }
}
