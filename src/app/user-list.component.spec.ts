import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UserListComponent, User } from './user-list.component';
import { CommonModule } from '@angular/common';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load 3 users on init', () => {
    expect(component.users.length).toBe(3);
  });

  it('should return only active users', () => {
    expect(component.activeUsers.length).toBe(2);
    expect(component.activeUsers.every(u => u.active)).toBeTrue();
  });

  it('should add a new user', () => {
    const newUser: User = { id: 4, name: 'Dave', active: true };
    component.addUser(newUser);
    expect(component.users.length).toBe(4);
    expect(component.users.find(u => u.id === 4)?.name).toBe('Dave');
  });

  it('should remove a user by id', () => {
    component.removeUser(2);
    expect(component.users.length).toBe(2);
    expect(component.users.find(u => u.id === 2)).toBeUndefined();
  });
});
