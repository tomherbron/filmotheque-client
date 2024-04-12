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
export class AddMovieFormComponent implements OnInit {

  movieForm: FormGroup;

  constructor(private toasterService: ToastrService,
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

  ngOnInit(): void {
  }

  addMovie(): void {
    if (this.movieForm.valid) {
      const formData = this.movieForm.value;
      this.movieService.addMovie(formData).subscribe(response => {
        if (response.status === 'success') {
          this.router.navigateByUrl("/")
            .then(r => this.toasterService.success("Movie has been added!"));
        } else {
          this.toasterService.error("Movie couldn't be added.");
        }
      });
    } else {
      this.toasterService.error("Add movie form is invalid.");
    }
  }
}
