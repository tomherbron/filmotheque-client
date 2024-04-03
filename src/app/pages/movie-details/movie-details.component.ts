import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/Movie";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  currentMovie: Movie | undefined;
  constructor(private route: ActivatedRoute, private movieService: MovieService) {

  }

  ngOnInit(): void {
    const movieId: number = parseInt(<string> this.route.snapshot.paramMap.get('id'));
    console.log(movieId)

    this.movieService.fetchMovieById(movieId).subscribe((response: Movie) => {
      this.currentMovie = response;
    });

  }
}
