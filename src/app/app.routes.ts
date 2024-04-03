import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MovieListComponent} from "./pages/movie-list/movie-list.component";
import {MovieDetailsComponent} from "./pages/movie-details/movie-details.component";

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'details/:id', component: MovieDetailsComponent }
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
