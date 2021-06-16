import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
