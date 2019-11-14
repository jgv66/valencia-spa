import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: string;
  surname: string;
  email: string;
  password: string;
  verifyPwd: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Realiza la llamada al servicio de perfil para
   * actualizar la información del usuario
   */
  updateProfile() {
    console.log('updateProfile');
  }

  /**
   * Realiza la llamada al servicio de perfil para
   * actualizar la clave del usuario
   */
  updatePassword() {
    console.log('updatePassword');
  }



}
