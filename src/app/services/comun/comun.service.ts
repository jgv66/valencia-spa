import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComunService {

  usuario;

  constructor( private http: HttpClient ) { }

  retrieveFile( body ) {
    const xUrl = environment.URL + '/tabla' ;
    console.log(xUrl, body);
    return this.http.post( xUrl, body );
  }

}
