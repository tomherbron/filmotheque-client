import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../interfaces/Movie";
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgForOf,
    NgClass,
    RouterLink
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  currentMovie: Movie | undefined;
  movieRating: number | undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    const movieId: number = parseInt(<string> this.route.snapshot.paramMap.get('id'));
    this.movieService.fetchMovieById(movieId).subscribe((response: Movie) => {
      this.currentMovie = response;
      this.movieRating = this.computeMovieRatings();
    });
  }

  computeMovieRatings(): number {
    let sumRatings = 0;
    const ratings = this.currentMovie?.ratings;
    if (ratings) {
      ratings.forEach(rating => {
        sumRatings += rating.note;
      });
      return sumRatings / ratings.length;
    }
    return 0;
  }

  starsArray(): number[] {
    const rating = Math.round(this.computeMovieRatings());
    return Array.from({ length: rating }, (_, index) => index + 1);
  }
}
