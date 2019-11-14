import { LogoutComponent } from './logout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutRoutingModule } from './logout-routing.module';


@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    LogoutRoutingModule
  ]
})
export class LogoutModule { }
