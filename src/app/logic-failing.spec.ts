import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent Logic Failures', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should fail: incorrect title', () => {
        expect(app.title).toBe('incorrect-app-title');
    });

    it('should fail: incorrect method return', () => {
        expect(app.myMethod()).toBe('goodbye');
    });

    it('should fail: incorrect variable value', () => {
        expect(app.myVariable).toBe(0);
    });
});
