import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/shared/models/person';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  listPerson: Person[] = []
  formGroup: FormGroup = this.builder.group([])
  realisatorId: number = 0
  scenaristId: number = 0

  constructor(
    private movieService: MovieService,
    private builder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movieService.listPerson = this.activatedRoute.snapshot.data['Person']
    this.listPerson = this.movieService.listPerson
    this.initForm()
  }

  initForm() {
    this.formGroup = this.builder.group(
      {
        title: [null, Validators.required],
        description: [null, Validators.required],
        releaseYear: [null, Validators.required],
        realisator: [null, Validators.required],
        scenarist: [null, Validators.required],
        actors: this.builder.array([])
      }
    )
  }

  addActor() {
    this.getActors().push(
      this.builder.group({
        personId: [null],
        role: [null, Validators.required]
      })
    )
  }

  getActors() : FormArray {
    return this.formGroup.get('actors') as FormArray
  }

}
