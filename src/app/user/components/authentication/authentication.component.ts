import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  // Déclaration d'un nouveau formulaire qui sera binder avec le formulaire HTML
  userFG: FormGroup = this.builder.group({})

  user: User = { email: "", password:"" }

  constructor(
    // Déclaration du service User
    private service: UserService,
    // Déclaration du FormBuilder pour binding avec le formulaire HTML
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Initialisation du formulaire et de tout ses champs (voir avec les retours de l'API)
    this.userFG = this.builder.group({
      emailControl: ['ren@mail.com', [Validators.required, Validators.email]],
      passwordControl: ['coucou', Validators.required]
    })
    this.user = this.service.user
  }


  // Méthode appelée lors de la soumission du formulaire
  authentication() {
    
    this.service.authentication(
      this.userFG.value['emailControl'],
      this.userFG.value['passwordControl']
    ).subscribe(
      // Traitement en cas de réussite de la requête
      (u: User/*représente le User reçu*/) => {
        this.service.user = u
        // On sauvegarde le token reçu dans le LocalStorage
        localStorage.setItem('tokenApi', this.service.user.token ? this.service.user.token : "")
        // Debug
        console.log(u)
        this.service.emitToken()
        this.router.navigate(['movie/list'])
      }
    )
  }

}