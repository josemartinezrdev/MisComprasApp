package com.miscompras.app.infrastructure.repositories.compraproducto;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.miscompras.app.domain.entities.CompraProducto;
import com.miscompras.app.domain.entities.CompraProductoPK;

@Repository
public interface CompraProductoRepository extends CrudRepository<CompraProducto, CompraProductoPK> {

}
