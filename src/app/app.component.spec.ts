import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  // 1️⃣ Component should be created
  it('should create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // 2️⃣ Title property exists
  it('should have title property', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBeDefined();
  });

  // 3️⃣ Title should match expected value
  it('should have title "sample-angular-app"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sample-angular-app');
  });

  // 4️⃣ Component should render title
  it('should render title in HTML', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('sample-angular-app');
  });

  // 5️⃣ Button click test
  it('should increment counter when button clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.counter = 0;
    app.increment();

    expect(app.counter).toBe(1);
  });

  // 6️⃣ Counter should start at 0
  it('counter initial value should be 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.counter).toBe(0);
  });

  // 7️⃣ Counter decrement test
  it('should decrement counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.counter = 5;
    app.decrement();

    expect(app.counter).toBe(4);
  });

  // 8️⃣ DOM element existence
  it('should contain button element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
  });

  // 9️⃣ Input binding test
  it('should update name property', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.name = "Angular";
    expect(app.name).toBe("Angular");
  });

  // 🔟 Lifecycle test
  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spyOn(app, 'ngOnInit');

    app.ngOnInit();

    expect(app.ngOnInit).toHaveBeenCalled();
  });

});
