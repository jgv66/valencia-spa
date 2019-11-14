import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = environment.URL;
  }

  updateProfile(userObj: any) {
    const profileUrl = `${this.API_URL}/profile`;
    return this.http.post(profileUrl, userObj);
  }

  updatePassword(user: string, password: string, newPassword: string) {
    const profileUrl = `${this.API_URL}/profile`;
    return this.http.post(profileUrl, { user, password, newPassword });
  }

}
