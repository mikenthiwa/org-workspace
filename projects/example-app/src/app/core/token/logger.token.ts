import { InjectionToken } from '@angular/core';

export type LoggerFn = (level: 'info' | 'warn' | 'error', message: string) => void;

export const GLOBAL_LOGGER = new InjectionToken<LoggerFn>('GLOBAL_LOGGER', {
  providedIn: 'root',
  factory: () => {
    return (level, message) => {
      console.log(`[${level.toLocaleUpperCase()}] ${message}`);
    }
  }
})
