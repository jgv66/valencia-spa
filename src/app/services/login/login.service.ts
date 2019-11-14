import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(user: string, password: string) {
    const xUrl = environment.URL + '/usuario' ;
    const body = { email: user, pssw: password };
    console.log(xUrl);
    return this.http.post( xUrl, body );
  }
}
