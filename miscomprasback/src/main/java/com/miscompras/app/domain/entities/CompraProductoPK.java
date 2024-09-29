package com.miscompras.app.domain.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class CompraProductoPK implements Serializable {
    @Column(name = "id_compra")
    private Long idcompra;

    @Column(name = "id_producto")
    private Long idproducto;

    public CompraProductoPK() {
    }

    public CompraProductoPK(Long idcompra, Long idproducto) {
        this.idcompra = idcompra;
        this.idproducto = idproducto;
    }

    public Long getIdcompra() {
        return this.idcompra;
    }

    public void setIdcompra(Long idcompra) {
        this.idcompra = idcompra;
    }

    public Long getIdproducto() {
        return this.idproducto;
    }

    public void setIdproducto(Long idproducto) {
        this.idproducto = idproducto;
    }

}
