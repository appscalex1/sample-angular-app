import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
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
=======
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sample-angular-app';
  unusedVar = 123;

  myMethod() {
    return 'hello';
  }

  anotherMethod = () => {
    let x = 5;
    let y = 10;
    return x + y;
  };

  myVariable = 123;

  unusedFunction() {
    console.log('hello');
>>>>>>> 5fb29248bd2cfeef8b5e5cfc4e9a973a8595046e
  }

  decrement() {
    this.counter--;
  }

}