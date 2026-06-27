import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to light theme', () => {
    expect(service.getTheme()).toBe('light');
  });

  it('should switch to dark theme when set', () => {
    service.setTheme('dark');
    expect(service.getTheme()).toBe('dark');
  });

  it('should toggle from light to dark', () => {
    expect(service.toggle()).toBe('dark');
  });

  it('should toggle from dark back to light', () => {
    service.setTheme('dark');
    expect(service.toggle()).toBe('light');
  });

  it('should return true for isDark when theme is dark', () => {
    service.setTheme('dark');
    expect(service.isDark()).toBeTrue();
  });

  it('should return false for isDark when theme is light', () => {
    service.setTheme('light');
    expect(service.isDark()).toBeFalse();
  });
});
