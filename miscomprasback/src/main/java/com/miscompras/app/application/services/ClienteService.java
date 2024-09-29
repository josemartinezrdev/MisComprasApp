package com.miscompras.app.application.services;

import java.util.List;

import com.miscompras.app.domain.entities.Cliente;

public interface ClienteService {
    List<Cliente> findAll();

    Cliente findById(String id);

    Cliente save(Cliente cliente);

    Cliente update(String id, Cliente cliente);

    Cliente delete(String id);
}
