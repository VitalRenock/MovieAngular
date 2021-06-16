import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  listPerson: Person[] = []

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll() : Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(environment.urlApi + 'Movie', { responseType: 'json' })
  }

  // Perso (Add Interceptor)
  getOne(id : number) : Observable<Movie> {
    return this.httpClient.get<Movie>(environment.urlApi + 'Movie/' + id, { responseType: 'json' })
  }

  getPersons() : Observable<Person[]> {
    return this.httpClient.get<Person[]>(environment.urlApi + 'Person', { responseType: 'json'} )
  }
}
