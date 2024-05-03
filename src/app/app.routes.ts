import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MoviesListComponent} from "./pages/movies-list/movies-list.component";
import {MovieDetailsComponent} from "./pages/movie-details/movie-details.component";
import {AddMovieComponent} from "./pages/add-movie/add-movie.component";
import {authGuard} from "./helpers/auth/auth.guard";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: MoviesListComponent, canActivate: [authGuard] },
  { path: 'details/:id', component: MovieDetailsComponent, canActivate: [authGuard] },
  { path: 'add-movie', component: AddMovieComponent, canActivate: [authGuard] },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
