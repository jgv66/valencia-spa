import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../services/comun/comun.service';

@Component({
  selector: 'app-operarios',
  templateUrl: './operarios.component.html',
  styleUrls: ['./operarios.component.scss']
})
export class OperariosComponent implements OnInit {

  lista = [];
  nombre = '';

  constructor( private comun: ComunService ) { }

  ngOnInit() {
    this.rescataDatos();
  }

  rescataDatos() {
    // this.lista = [];
    this.comun.retrieveFile( { tabla: 'operarios', orderby: 'nombre' } )
        .subscribe( (datos: any) => {
            // console.log(datos);
            this.lista = datos;
        });
  }

}
