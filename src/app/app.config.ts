import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { dashboardRoutes } from './Pages/dashboard/dashboard.routing';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideRouter(dashboardRoutes),
    provideAnimations(),
  ],
};
