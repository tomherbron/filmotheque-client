import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieEndpoint: string = 'movies'

  constructor(private httpService: HttpService) { }

  fetchAllMovies(): Observable<any> {
    return this.httpService.get(this.movieEndpoint);
  }


}
