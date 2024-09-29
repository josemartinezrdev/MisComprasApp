package com.miscompras.app.domain.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 45)
    private String nombre;
    @Column(length = 150)
    private String codigo_barras;
    @Column(length = 16)
    private float precio_venta;
    @Column
    private int cantidad_stock;
    @Column
    private byte estado;

    @ManyToOne()
    private Categoria categoria;

    public Producto() {
    }

    public Producto(Long id, String nombre, String codigo_barras, float precio_venta, int cantidad_stock, byte estado,
            Categoria categoria) {
        this.id = id;
        this.nombre = nombre;
        this.codigo_barras = codigo_barras;
        this.precio_venta = precio_venta;
        this.cantidad_stock = cantidad_stock;
        this.estado = estado;
        this.categoria = categoria;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigo_barras() {
        return this.codigo_barras;
    }

    public void setCodigo_barras(String codigo_barras) {
        this.codigo_barras = codigo_barras;
    }

    public float getPrecio_venta() {
        return this.precio_venta;
    }

    public void setPrecio_venta(float precio_venta) {
        this.precio_venta = precio_venta;
    }

    public int getCantidad_stock() {
        return this.cantidad_stock;
    }

    public void setCantidad_stock(int cantidad_stock) {
        this.cantidad_stock = cantidad_stock;
    }

    public byte getEstado() {
        return this.estado;
    }

    public void setEstado(byte estado) {
        this.estado = estado;
    }

    public Categoria getCategoria() {
        return this.categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

}
