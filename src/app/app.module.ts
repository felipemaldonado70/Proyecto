import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Tarea/add/add.component';
import { EditarComponent } from './Tarea/editar/editar.component';
import { ListarComponent } from './Tarea/listar/listar.component';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../app/Servicios/servicio.service'
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
