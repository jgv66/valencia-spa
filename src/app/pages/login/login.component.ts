import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunService } from '../../services/comun/comun.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: string;
  password: string;

  constructor( public comun: ComunService,
               private router: Router,
               private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin() {
    this.loginService.login( this.user, this.password )
    .subscribe( ( data: Array<any> ) => {
        console.log( data[0], data.length );
        try {
          if ( data.length > 0 ) {
            this.comun.usuario = data[0];
            this.router.navigate(['/main/dashboard']);
          }
        } catch (error) {
          alert( 'Corrija email/clave para ingresar' );
        }
      },
      err => {
        console.error(err);
      }
    );
  }

}
