import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerEndpoint: string = 'auth/register';
  private loginEndpoint: string = 'auth/login';

  constructor(private httpService: HttpService) { }

  registerUser(userData: any): Observable<any> {
    return this.httpService.post(this.registerEndpoint, userData);
  }

  loginUser(credentials: any) : Observable<any> {
    return this.httpService.post(this.loginEndpoint, credentials);
  }

}
