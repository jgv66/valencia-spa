import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../services/comun/comun.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  lista = [];
  nombre = '';

  constructor( private comun: ComunService ) { }

  ngOnInit() {
    this.rescataDatos();
  }

  rescataDatos() {
    // this.lista = [];
    this.comun.retrieveFile( { tabla: 'usuario', orderby: 'nombre' } )
        .subscribe( (datos: any) => {
            // console.log(datos);
            this.lista = datos;
        });
  }
}
