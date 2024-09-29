package com.miscompras.app.infrastructure.repositories.compra;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.miscompras.app.domain.entities.Compra;

@Repository
public interface CompraRepository extends CrudRepository<Compra, Long> {
}
