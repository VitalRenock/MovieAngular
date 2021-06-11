import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'MovieAngular';

  token : boolean = false
  tokenSub: Subscription = new Subscription()


  constructor(
    private router : Router,
    private service : UserService
  ) {}
  
  // Nettoyage Auto du localStorage au lancement de l'application
  ngOnInit(): void {
    this.logout()
    this.tokenSub = this.service.tokenSubject.subscribe(this.getToken())
  }
  
  ngOnDestroy(): void {
    this.tokenSub.unsubscribe()
  }
  
  logout() {
    localStorage.clear()
    this.service.emitToken()
    // Redirection après logout
    this.router.navigate(['user/authentication'])
  }
  
  getToken() {
    return (value : boolean) => {
      this.token = value
    }
  }

}