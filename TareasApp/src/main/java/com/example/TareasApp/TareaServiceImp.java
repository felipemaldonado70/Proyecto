package com.example.TareasApp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TareaServiceImp implements TareaService{
    @Autowired
    private TareaRepositorio repositorio;

    @Override
    public List<Tarea> listar() {       
        return repositorio.findall();
    }

    @Override
    public Tarea listarId(int id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Tarea add(Tarea t) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Tarea edit(Tarea t) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Tarea delete(int id) {
        // TODO Auto-generated method stub
        return null;
    }



}