import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output num = 0;
  score: number[] = [];
  count: any;

  start() {
    this.count = setInterval(() => {
      this.score.push(this.num++);
      console.log(this.score);
    }, 1000);
  }

  stop() {
    clearInterval(this.count);
    this.num = 0;
    this.score = [];
    console.log(this.score);
  }
}
