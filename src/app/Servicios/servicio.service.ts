import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../Modelo/Tarea'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  tarea:Tarea
  constructor(private http:HttpClient) { }

  url='http://localhost:8080/BACKENDAPPTAREAS/personas';
  getTareas()
  {
    return this.http.get<Tarea[]>(this.url)
  }

  createtareas(tarea:Tarea){
    return this.http.post<Tarea[]>(this.url,tarea)
  }
  

}
