import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { Person } from 'src/app/shared/models/person';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // Perso
  movie : Movie = {}
  movieId : number = 0
  actorList : Person[] = []

  constructor(
    // Perso
    private service : MovieService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // On va rechercher dans notre route l'id
    this.movieId = this.activatedRoute.snapshot.params['id']
    this.getOne()
  }

  // Perso
  getOne() {
    this.service.getOne(this.movieId).subscribe(
      (m : Movie) => { 
        this.movie = m
        if (m.actors != undefined) {
          this.actorList = m.actors
        }
      }
    )
  }
}
