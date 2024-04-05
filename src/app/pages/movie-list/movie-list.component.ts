import {Component, OnInit} from '@angular/core';
import {Movie} from '../../interfaces/Movie';
import {MovieService} from "../../services/movie.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MovieDetailsComponent} from "../movie-details/movie-details.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    MovieDetailsComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {

  movies: Movie[] | undefined;
  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
     this.movieService.fetchAllMovies().subscribe((response: Movie[]): void => {
       this.movies = response;
     });
  }



}
