import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `
})
export class AppComponent implements OnInit {

  title = 'sample-angular-app';
  counter = 0;
  name = '';

  ngOnInit() {}

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}
