package com.miscompras.app.infrastructure.repositories.categoria;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miscompras.app.application.services.CategoriaService;
import com.miscompras.app.domain.entities.Categoria;

@Service
public class ImpCategoria implements CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Categoria> findAll() {
        return (List<Categoria>) categoriaRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Categoria findById(Long id) {
        return categoriaRepository.findById(id).orElse(null);
    }

    @Transactional
    @Override
    public Categoria save(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Transactional
    @Override
    public Categoria update(Long id, Categoria categoria) {
        Categoria newCat = categoriaRepository.findById(id).orElse(null);
        if (newCat != null) {
            newCat.setDescripcion(categoria.getDescripcion());
            newCat.setEstado(categoria.getEstado());
            return categoriaRepository.save(newCat);
        }
        return null;
     }

    @Transactional
    @Override
    public Categoria delete(Long id) {
        Categoria categoria = categoriaRepository.findById(id).orElse(null);
        if (categoria != null) {
            categoriaRepository.delete(categoria);
        }
        return categoria;
    }

}
