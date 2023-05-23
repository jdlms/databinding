import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
    `
      .blue {
        color: white;
        background-color: blue;
      }
    `,
  ],
})
export class InputComponent implements OnInit {
  userName = '';

  setUserName(event: any) {
    this.userName = event.target.value;
  }

  resetUserName() {
    this.userName = '';
  }

  displayParagraph = true;
  clickArray: number[] = [];
  count = 0;

  toggleParagraph() {
    this.displayParagraph = !this.displayParagraph;
    this.count += 1;
    this.clickArray.push(this.count);
  }

  // getColor() {
  //   return this.count < 5 ? 'gray' : 'red';
  // }

  ngOnInit(): void {}
}
