import { Component, OnInit } from '@angular/core';
import { ComunService } from '../../services/comun/comun.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  bsModalRef: BsModalRef;

  lista = [];
  nombre = '';

  constructor( private comun: ComunService,
               private modalService: BsModalService ) { }

  ngOnInit() {
    this.rescataDatos();
  }

  rescataDatos() {
    this.lista = [];
    this.comun.retrieveFile( { tabla: 'especialidades', orderby: 'codigo' } )
        .subscribe( (datos: any) => {
            // console.log(datos);
            this.lista = datos;
        });
  }

  openModalWithComponent( data ) {
    const initialState = {
      title:  'Operación: ' + data.codigo,
      dato:   data.descripcion,
      codigo: data.codigo
    };
    this.bsModalRef = this.modalService.show( ModalContentComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Actualizar';
  }

}

/******************************** This is a component which we pass in modal ***************************************/
@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Descripción</span>
        </div>
        <input type="text"
               name="dato"
               [value]="dato"
               class="form-control"
               placeholder="descripcion de la operación"
               aria-label="Username"
               aria-describedby="basic-addon1">
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="ejemplo()">{{closeBtnName}}</button>
    </div>
  `
})

export class ModalContentComponent implements OnInit {
  title: string;
  dato: string;
  codigo: string;
  closeBtnName: string;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    console.log(this.title);
    console.log(this.dato);
    console.log(this.codigo);
    // this.descripcion = this.dato['descripcion'];
  }

  ejemplo() {
    console.log('fin', this.dato);
    this.bsModalRef.hide();
  }

}
