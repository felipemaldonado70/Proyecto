import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Servicios/servicio.service';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/Modelo/Tarea';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router , private service:ServicioService) { }

  ngOnInit(): void {
  }

  Guardar(tarea:Tarea){
    this.service.createtareas(tarea)
    .subscribe(data=>{
      alert("Se agrego con exito..!!")
      this.router.navigate(["Listar"])
  }
}
