import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: () => import ('./user/user.module').then(m => m.UserModule) },
  { path: 'movie', loadChildren: () => import ('./movie/movie.module').then(m => m.MovieModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
