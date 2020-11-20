package com.example.TareasApp;

import java.util.List;

public interface TareaService{
    List<Tarea>listar();
    Tarea listarId(int id);
    Tarea add(Tarea t);
    Tarea edit(Tarea t);
    Tarea delete(int id);

}