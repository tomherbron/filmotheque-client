import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = 'http://127.0.0.1:8080/api';

  constructor(private httpClient: HttpClient) { }

  get(endpoint: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endpoint}`)
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/${endpoint}`, data)
  }

}
