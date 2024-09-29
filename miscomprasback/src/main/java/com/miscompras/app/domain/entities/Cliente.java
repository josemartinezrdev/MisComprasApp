package com.miscompras.app.domain.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "clientes")
public class Cliente {
    @Id
    @Column(length = 20)
    private String id;

    @Column(length = 40)
    private String name;
    @Column(length = 100)
    private String apellido;
    @Column(length = 30)
    private float celular;
    @Column(length = 80)
    private String direccion;
    @Column(length = 70, unique = true)
    private String correo_electronico;

    public Cliente() {
    }

    public Cliente(String id, String name, String apellido, float celular, String direccion,
            String correo_electronico) {
        this.id = id;
        this.name = name;
        this.apellido = apellido;
        this.celular = celular;
        this.direccion = direccion;
        this.correo_electronico = correo_electronico;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public float getCelular() {
        return this.celular;
    }

    public void setCelular(float celular) {
        this.celular = celular;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCorreo_electronico() {
        return this.correo_electronico;
    }

    public void setCorreo_electronico(String correo_electronico) {
        this.correo_electronico = correo_electronico;
    }

}
