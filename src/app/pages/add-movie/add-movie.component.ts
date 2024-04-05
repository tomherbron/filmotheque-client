import {Component, Input} from '@angular/core';
import {AddMovieFormComponent} from "../../forms/add-movie-form/add-movie-form.component";

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    AddMovieFormComponent
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

}
