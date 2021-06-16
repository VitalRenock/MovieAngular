import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';
import { User } from 'src/app/shared/models/user';
import { MovieService } from 'src/app/shared/services/movie.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // On déclare une liste qui sera disponible coté HTML 
  // et qui sera automatiquement mise à jour par l'Observable
  list: Movie[] = []

  user: User = { email: "", password:"" }

  constructor(
    // On déclare un nouveau service Movie
    private service: MovieService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // On souscrit à notre Observable<Movie> du service
    this.getAll()
    this.user = this.userService.user
  }


  // Méthode pour souscrire à notre Observable<Movie> du service
  // Quand la liste du service sera modifiée, la liste du composant sera mise à jour
  getAll() {
    this.service.getAll().subscribe(
      (value: Movie[]) => { this.list = value }
    )
  }

  add() {
    this.router.navigate(['movie/addmovie'])
  }

}
