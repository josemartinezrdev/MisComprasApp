package com.miscompras.app.infrastructure.repositories.categoria;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.miscompras.app.domain.entities.Categoria;

@Repository
public interface CategoriaRepository extends CrudRepository<Categoria, Long> {

}
