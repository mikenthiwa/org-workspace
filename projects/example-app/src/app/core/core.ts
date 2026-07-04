import {
  provideRouter,
  Routes,
} from '@angular/router';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './interceptors/headers.interceptor';

import { provideNativeDateAdapter } from '@angular/material/core';

interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([headersInterceptor])),
    provideRouter(routes),
    // provideClientHydration(),
    provideNativeDateAdapter(),
  ];
}
