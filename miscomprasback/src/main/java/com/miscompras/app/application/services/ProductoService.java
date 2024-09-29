package com.miscompras.app.application.services;

import java.util.List;
import com.miscompras.app.domain.entities.Producto;

public interface ProductoService {
    List<Producto> findAll();

    Producto findById(Long id);

    Producto save(Producto producto);

    Producto update(Long id, Producto producto);

    Producto delete(Long id);
}
