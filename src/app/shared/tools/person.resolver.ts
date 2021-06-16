import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Person } from '../models/person';
import { MovieService } from '../services/movie.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<Person[]> {

  constructor(
    private movieService: MovieService
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Person[]> {
    return this.movieService.getPersons()
  }
}
