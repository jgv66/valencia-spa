import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperacionesComponent } from './operaciones.component';

const routes: Routes = [
  {
    path: '',
    component: OperacionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacionesRoutingModule { }
