import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-movie-form',
  standalone: true,
  imports: [],
  templateUrl: './add-movie-form.component.html',
  styleUrl: './add-movie-form.component.css'
})
export class AddMovieFormComponent implements OnInit {

  movieForm: FormGroup | undefined;

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
      this.movieForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        year: new FormControl('', [Validators.required, Validators.min(1900)]),
        duration: new FormControl('', [Validators.required, Validators.min(5), Validators.max(300)]),
        synopsis: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(500)]),
        genre: new FormControl('', [Validators.required])
      })
    }

}
