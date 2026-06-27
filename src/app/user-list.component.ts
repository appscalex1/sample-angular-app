import { Component, OnInit } from '@angular/core';

export interface User {
  id: number;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of activeUsers">{{ user.name }}</li>
    </ul>
  `
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  ngOnInit() {
    this.users = [
      { id: 1, name: 'Alice', active: true },
      { id: 2, name: 'Bob',   active: false },
      { id: 3, name: 'Carol', active: true },
    ];
  }

  get activeUsers(): User[] {
    return this.users.filter(u => u.active);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
