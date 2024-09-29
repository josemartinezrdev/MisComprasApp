package com.miscompras.app.infrastructure.repositories.producto;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.miscompras.app.domain.entities.Producto;

@Repository
public interface ProductoRepository extends CrudRepository<Producto, Long> {

}
