import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ServicioService }from '../../Servicios/servicio.service'
import { Tarea } from 'src/app/Modelo/Tarea';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tareas:Tarea[];
  constructor(private http:ServicioService, private router:Router ) { }

  ngOnInit(): void {
    this.tareas.getTareas()
    .subscribe(data=>{
      this.tareas=data;
    })
  
    
  
  }



}
