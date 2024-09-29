package com.miscompras.app.application.services;
import java.util.List;

import com.miscompras.app.domain.entities.CompraProducto;
import com.miscompras.app.domain.entities.CompraProductoPK;

public interface CompraProductoService {
    List<CompraProducto> findAll();

    CompraProducto findById(CompraProductoPK id);

    CompraProducto save(CompraProducto compraProducto);

    CompraProducto update(CompraProductoPK id, CompraProducto compraProducto);

    CompraProducto delete(CompraProductoPK id);
}
