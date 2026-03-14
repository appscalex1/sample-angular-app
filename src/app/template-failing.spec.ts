import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent Template Failures', () => {
    let fixture: ComponentFixture<AppComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement as HTMLElement;
    });

    it('should fail: missing element', () => {
        const missingElement = compiled.querySelector('.non-existent-class');
        expect(missingElement).not.toBeNull();
    });

    it('should fail: incorrect heading expectation', () => {
        const heading = compiled.querySelector('h2');
        expect(heading?.textContent).toContain('Documentation');
    });

    it('should fail: anotherMethod calculation is wrong', () => {
        const app = fixture.componentInstance;
        expect(app.anotherMethod()).toBe(20);
    });

    it('should fail: incorrect terminal default', () => {
        const terminal = compiled.querySelector('.terminal pre');
        expect(terminal?.textContent).toContain('git init');
    });
});
