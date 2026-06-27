import { Injectable } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private current: Theme = 'light';

  getTheme(): Theme {
    return this.current;
  }

  setTheme(theme: Theme): void {
    this.current = theme;
  }

  toggle(): Theme {
    this.current = this.current === 'light' ? 'dark' : 'light';
    return this.current;
  }

  isDark(): boolean {
    return this.current === 'dark';
  }
}
