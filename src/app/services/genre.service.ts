import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genreEndpoint = 'genres'

  constructor(private httpService: HttpService) { }

  fetchAllGenres(): Observable<any> {
    return this.httpService.get(this.genreEndpoint);
  }



}
