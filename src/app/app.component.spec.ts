import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
<<<<<<< HEAD
=======
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let compiled: HTMLElement;
>>>>>>> 5fb29248bd2cfeef8b5e5cfc4e9a973a8595046e

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

<<<<<<< HEAD
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
=======
  // 1. Existing: Component creation
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  // 2. Existing: Title property
  it(`should have as title 'sample-angular-app'`, () => {
    expect(app.title).toEqual('sample-angular-app');
  });

  // 3. Updated Existing: Rendered title
  it('should render title in highlight card', () => {
    expect(compiled.querySelector('.highlight-card span')?.textContent).toContain('sample-angular-app app is running v2!');
  });

  // 4. Component Logic: myMethod
  it('should return "hello" from myMethod', () => {
    expect(app.myMethod()).toBe('hello');
  });

  // 5. Component Logic: anotherMethod
  it('should return 15 from anotherMethod', () => {
    expect(app.anotherMethod()).toBe(15);
  });

  // 6. Component Logic: myVariable
  it('should have myVariable equal to 123', () => {
    expect(app.myVariable).toBe(123);
  });

  // 7. Component Logic: unusedVar
  it('should have unusedVar equal to 123', () => {
    expect(app.unusedVar).toBe(123);
  });

  // 8. Template: Toolbar text
  it('should display "Welcome" in the toolbar', () => {
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain('Welcome');
  });

  // 9. Template: Twitter link
  it('should have a link to Angular on Twitter', () => {
    const twitterLink = compiled.querySelector('a[aria-label="Angular on twitter"]');
    expect(twitterLink?.getAttribute('href')).toBe('https://twitter.com/angular');
  });

  // 10. Template: YouTube link
  it('should have a link to Angular on YouTube', () => {
    const youtubeLink = compiled.querySelector('a[aria-label="Angular on YouTube"]');
    expect(youtubeLink?.getAttribute('href')).toBe('https://youtube.com/angular');
  });

  // 11. Template: Default terminal content
  it('should show "ng generate component xyz" by default in terminal', () => {
    const terminal = compiled.querySelector('.terminal pre');
    expect(terminal?.textContent).toContain('ng generate component xyz');
  });

  // 12. Template Interaction: Click Material button
  it('should update terminal to "ng add @angular/material" when Material button is clicked', () => {
    const buttons = compiled.querySelectorAll('.card-container button');
    const materialButton = Array.from(buttons).find(btn => btn.textContent?.includes('Angular Material')) as HTMLButtonElement;
    materialButton.click();
    fixture.detectChanges();
    const terminal = compiled.querySelector('.terminal pre');
    expect(terminal?.textContent).toContain('ng add @angular/material');
  });

  // 13. Template Interaction: Click PWA button
  it('should update terminal to "ng add @angular/pwa" when PWA button is clicked', () => {
    const buttons = compiled.querySelectorAll('.card-container button');
    const pwaButton = Array.from(buttons).find(btn => btn.textContent?.includes('Add PWA Support')) as HTMLButtonElement;
    pwaButton.click();
    fixture.detectChanges();
    const terminal = compiled.querySelector('.terminal pre');
    expect(terminal?.textContent).toContain('ng add @angular/pwa');
  });

  // 14. Template Interaction: Click Test button
  it('should update terminal to "ng test" when Run and Watch Tests button is clicked', () => {
    const buttons = compiled.querySelectorAll('.card-container button');
    const testButton = Array.from(buttons).find(btn => btn.textContent?.includes('Run and Watch Tests')) as HTMLButtonElement;
    testButton.click();
    fixture.detectChanges();
    const terminal = compiled.querySelector('.terminal pre');
    expect(terminal?.textContent).toContain('ng test');
  });

  // 15. Template: Heading presence
  it('should contain "Resources" heading', () => {
    const heading = compiled.querySelector('h2');
    expect(heading?.textContent).toContain('Resources');
>>>>>>> 5fb29248bd2cfeef8b5e5cfc4e9a973a8595046e
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