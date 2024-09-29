package com.miscompras.app.infrastructure.repositories.cliente;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.miscompras.app.domain.entities.Cliente;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, String> {

}
