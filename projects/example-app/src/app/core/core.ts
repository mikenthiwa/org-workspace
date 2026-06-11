import {
  provideRouter,
  Routes,
  withRouterConfig,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import {
  isDevMode,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './interceptors/headers.interceptor';
import { withFetch } from '@angular/common/http';
import {
  provideClientHydration,
  withEventReplay,
  withHttpTransferCacheOptions,
  withIncrementalHydration,
} from '@angular/platform-browser';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideServiceWorker } from '@angular/service-worker';

interface CoreOptions {
  routes: Routes;
}

export function provideCore({ routes }: CoreOptions) {
  return [
    provideHttpClient(withInterceptors([headersInterceptor]), withFetch()),
    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      // withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideClientHydration(
      withEventReplay(),
      withIncrementalHydration(),
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideNativeDateAdapter(),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ];
}
