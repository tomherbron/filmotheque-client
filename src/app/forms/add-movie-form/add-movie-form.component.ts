import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {MovieService} from "../../services/api/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-movie-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-movie-form.component.html',
  styleUrl: './add-movie-form.component.css'
})
export class AddMovieFormComponent {

  movieForm: FormGroup;

  constructor(private toastrService: ToastrService,
              private movieService: MovieService, private router: Router) {
    this.movieForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required, Validators.min(1900)]),
      duration: new FormControl('', [Validators.required, Validators.min(5), Validators.max(300)]),
      synopsis: new FormControl('', [Validators.required, Validators.minLength(100,), Validators.maxLength(2000)]),
      genre: new FormControl('', [Validators.required]),
      director: new FormControl('', [Validators.required]),
      actors: new FormControl('', [Validators.required])
    })
  }

  addMovie(): void {
    if (this.movieForm.valid) {
      const formData = this.movieForm.value;
      this.movieService.addMovie(formData).subscribe(response => {
        if (response.status === 'success') {
          this.router.navigateByUrl("/")
            .then(r => this.toastrService.success("Movie has been added!"));
        } else {
          this.toastrService.error("Movie couldn't be added.");
        }
      });
    } else {
      this.toastrService.error("Add movie form is invalid.");
    }
  }
}
