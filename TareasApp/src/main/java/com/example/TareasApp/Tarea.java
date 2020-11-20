package com.example.TareasApp;

import javax.persistence.*;

@Entity
@Table (name = "tarea")
public class Tarea{

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String name;
    @Column
    private String etq;
    @Column 
    private String respo;

    public int getId(){
        return id;
    }

    public String getname(){
        return name;
    }

    public String getetq(){
        return etq;
    }

    public String getrespo(){
        return etq;
    }

    public void setid(int id){
       this.id = id;
    }

    public void setname(String name){
        this.name = name;
     }

     public void setetq(String etq){
        this.etq = etq;
     }

     public void setrespo(String respo){
        this.respo = respo;
     }

}