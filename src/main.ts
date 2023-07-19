import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

document.addEventListener('DOMContentLoaded', () => {
  setBasePath(
    'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.5.2/cdn'
  );
});
