import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Déclaration d'un nouveau formulaire qui sera binder avec le formulaire HTML
  userFG: FormGroup = this.builder.group({})

  constructor(
    // Déclaration du service User
    private service: UserService,
    // Déclaration du FormBuilder pour binding avec le formulaire HTML
    private builder: FormBuilder
  ) { }

  ngOnInit(): void {

    // Initialisation du formulaire et de tout ses champs (voir avec les retours de l'API)
    this.userFG = this.builder.group({
      emailControl: [null, [Validators.required, Validators.email]],
      passwordControl: [null, Validators.required],
      firstNameControl: [null, Validators.required],
      lastNameControl: [null, Validators.required],
      birthDayControl: [null, Validators.required]
    })
  }

  // Méthode appelée lors de la soumission du formulaire
  register() {

    // Appel de la méthode 'Register()' du service en fournissant les valeurs du formulaire
    this.service.register(
      this.userFG.value['emailControl'],
      this.userFG.value['passwordControl'],
      this.userFG.value['firstNameControl'],
      this.userFG.value['lastNameControl'],
      this.userFG.value['birthDayControl']
    ).subscribe(
      () => { },
      (error) => { console.log(error) },
      () => { this.postRegister }
    )

  }
          
  postRegister() {
    let user: User

    // Option supplémentaire: Une fois enregistré, on connecte l'utilisateur...
    // Appel de la méthode 'authentication()' du service
    this.service.authentication(
      this.userFG.value['emailControl'],
      this.userFG.value['passwordControl']
    ).subscribe(
      // Traitement en cas de réussite de la requête
      (u: User/*représente le User reçu*/) => {
        user = u
        // On sauvegarde le token reçu dans le LocalStorage
        localStorage.setItem('tokenApi', user.token ? user.token : "")
        // Debug
        console.log(u)
        // Gestion du bouton Logout
        this.service.emitToken()
      },
      (error) => { console.log(error) }
    )
  }
}