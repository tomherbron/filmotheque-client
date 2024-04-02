import {Component, NgIterable, OnInit} from '@angular/core';
import {Movie} from '../../interfaces/Movie';
import {MovieService} from "../../services/movie.service";
import {Observable} from "rxjs";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  movies: Observable<Movie[]> & NgIterable<any> | undefined | null;
  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
     this.movieService.fetchAllMovies().subscribe(response => {
       this.movies = response;
       console.log(response);
     });
  }



}
