import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithHeader = req.clone({
    headers: req.headers.set(
      'Authorization',
      'Api-Key PppGphgV.Ltl2yc1vfU4B6xEuKbFK6lbRMXF21OLI'
    ),
  });
  return next(reqWithHeader);
};
