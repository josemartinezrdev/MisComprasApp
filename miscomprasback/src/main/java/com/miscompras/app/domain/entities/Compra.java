package com.miscompras.app.domain.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "compras")
public class Compra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private LocalDate fecha;
    @Column(length = 1)
    private char medio_pago;
    @Column(length = 300)
    private String comentario;
    @Column(length = 1)
    private char estado;

    @ManyToOne()
    private Cliente cliente;

    public Compra() {
    }

    public Compra(Long id, LocalDate fecha, char medio_pago, String comentario, char estado, Cliente cliente) {
        this.id = id;
        this.fecha = fecha;
        this.medio_pago = medio_pago;
        this.comentario = comentario;
        this.estado = estado;
        this.cliente = cliente;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFecha() {
        return this.fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public char getMedio_pago() {
        return this.medio_pago;
    }

    public void setMedio_pago(char medio_pago) {
        this.medio_pago = medio_pago;
    }

    public String getComentario() {
        return this.comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public char getEstado() {
        return this.estado;
    }

    public void setEstado(char estado) {
        this.estado = estado;
    }

    public Cliente getCliente() {
        return this.cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

}
