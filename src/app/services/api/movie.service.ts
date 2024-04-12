import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {Movie} from "../../interfaces/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieEndpoint: string = 'movies'

  constructor(private httpService: HttpService) { }

  fetchAllMovies(): Observable<any> {
    return this.httpService.get(this.movieEndpoint);
  }

  fetchMovieById(movieId: number): Observable<any> {
    return this.httpService.get(`${this.movieEndpoint}/${movieId}`);
  }

  addMovie(movieData: Movie): Observable<any> {
    return this.httpService.post(this.movieEndpoint, movieData);
  }

  updateMovie(movieId: number, movieData: Movie): Observable<any> {
    return this.httpService.post(this.movieEndpoint, movieData);
  }

  deleteMovie(movieId: number): Observable<any> {
    return this.httpService.delete(this.movieEndpoint, movieId);
  }


}
