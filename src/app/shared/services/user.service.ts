import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi : string = environment.urlApi

  get token() : boolean {
    return (Boolean)(localStorage.getItem('tokenApi')) ?? false
  }
  tokenSubject : Subject<boolean> = new Subject<boolean>()

  user: User = { email: "", password:"" }

  constructor(
    // Déclaration d'un HttpClient
    private httpClient : HttpClient
  ) { }

  authentication(email: string, password : string) : Observable<User> {
    // Création de l'objet qui va recevoir la réponse
    let myUser = { email: email, password: password }
    // Appel de l'API en fournissant l'objet qui va recevoir la réponse
    return this.httpClient.post<User>(this.urlApi+"Auth/auth", myUser)
  }
  
  register(email: string, password : string, firstname: string, lastname: string, birthday : Date) : Observable<any> {
    // Création de l'objet qui va recevoir la réponse
    let newUser : User = { email: email, password: password, firstName: firstname, lastName: lastname, birthDate: birthday }
    // Appel de l'API en fournissant l'objet qui va recevoir la réponse
    return this.httpClient.post(this.urlApi + "User/register", newUser, { responseType: "text"} )
  }

  // Invocation du Token
  emitToken() {
    this.tokenSubject.next(this.token)
    console.log(this.token)
  }

}