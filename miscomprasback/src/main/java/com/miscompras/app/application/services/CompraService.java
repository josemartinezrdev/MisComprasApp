package com.miscompras.app.application.services;

import java.util.List;

import com.miscompras.app.domain.entities.Compra;

public interface CompraService {
    List<Compra> findAll();

    Compra findById(Long id);

    Compra save(Compra compra);

    Compra update(Long id, Compra compra);

    Compra delete(Long id);
}