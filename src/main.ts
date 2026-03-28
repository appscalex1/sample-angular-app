import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// BAD: using eval will trigger Semgrep by default
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err: any) => {
    eval("console.log('Bootstrap error')"); // ⚠ Semgrep should catch this
  });
