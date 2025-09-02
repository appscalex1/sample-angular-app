// src/environments/environment.ts
export const environment = {
  production: false,
  apiKey: 'AKIAEXAMPLESECRETKEY123456',  // <<< This is a "leak"
  dbPassword: 'MySuperSecretPassword'    // <<< Another "leak"
};
