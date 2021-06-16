import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../shared/tools/admin.guard';
import { PersonResolver } from '../shared/tools/person.resolver';
import { TokenGuard } from '../shared/tools/token.guard';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { DetailsComponent } from './components/details/details.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'list', component: ListComponent },
      { path: 'details/:id', canActivate: [TokenGuard], component: DetailsComponent },
      { path: 'addmovie', canActivate: [AdminGuard], resolve: { Person : PersonResolver },component: AddMovieComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
