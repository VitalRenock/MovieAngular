import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  // unknow car la méthode intercepte plusieurs requêtes de différents types
  // Attention à l'espace obligatoire entre 'bearer '
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('tokenApi')
    if (token != "") {
      let clone = request.clone({setHeaders: { 'Authorization': 'bearer ' + token } })
      return next.handle(clone)
    }
    return next.handle(request);
  }
}
