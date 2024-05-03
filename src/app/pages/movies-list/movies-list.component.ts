import {Component, OnInit} from '@angular/core';
import {Movie} from '../../interfaces/Movie';
import {MovieService} from "../../services/api/movie.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MovieDetailsComponent} from "../movie-details/movie-details.component";

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    MovieDetailsComponent
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] | undefined;
  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
     this.movieService.fetchAllMovies().subscribe((response: Movie[]): void => {
       this.movies = response;
     });
  }



}
