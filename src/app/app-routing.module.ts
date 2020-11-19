import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Tarea/add/add.component';
import { EditarComponent } from './Tarea/editar/editar.component';
import { ListarComponent } from './Tarea/listar/listar.component';


const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'add' ,component: AddComponent},
  {path: 'edit' ,component:EditarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
