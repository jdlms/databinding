import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  num = 0;
  count: any;



  start() {
    this.count = setInterval(() => {
      this.intervalFired.emit(this.num + 1);
      this.num++;
      console.log(this.num);
    }, 1000);
  }

  stop() {
    clearInterval(this.count);
  }
}
