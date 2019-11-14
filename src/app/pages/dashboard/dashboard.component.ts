import { DashboardService } from './../../services/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { Observable } from 'rxjs';
import { ComunService } from '../../services/comun/comun.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

defineLocale('es', esLocale);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  bsModalRef: BsModalRef;

  fechaIni = new Date();
  fechaFin = new Date();
  cliente  = '';
  retrievedData$: Observable<any>;
  lista = [];
  usuarios;

  constructor( public comun: ComunService,
               private dashboardService: DashboardService,
               private modalService: BsModalService ) {
      setTheme('bs4');
  }

  ngOnInit() {
    // console.log( this.usuarios );
    // this.rescataDatos();
  }

  rescataDatos() {
    this.lista = [];
    this.dashboardService.retrieveData( this.fechaIni, this.fechaFin, this.cliente )
        .subscribe( datos => {
            // console.log(datos);
            this.lista.push( ...datos[0] );
        });
    // this.parsedYearMonth = (this.yearMonth) ? this.yearMonth.toISOString().split(/(\d{4}-\d{2})/)[1] : undefined;
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
