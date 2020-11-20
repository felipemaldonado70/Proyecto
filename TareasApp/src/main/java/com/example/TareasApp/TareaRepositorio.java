package com.example.TareasApp;

import java.util.List;
import org.springframework.data.repository.Repository;
public interface TareaRepositorio extends Repository<Tarea, Integer>{

    List<Tarea>findall();
    Tarea findOne(int id);
    Tarea save(Tarea t);
    void delete(Tarea t);


}