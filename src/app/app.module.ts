import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './components/header/header.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-CL';
import { OperariosComponent } from './pages/operarios/operarios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { OperacionesComponent } from './pages/operaciones/operaciones.component';

// the second parameter 'fr' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OperariosComponent,
    UsuariosComponent,
    OperacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
