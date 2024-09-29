package com.miscompras.app.infrastructure.repositories.compraproducto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miscompras.app.application.services.CompraProductoService;
import com.miscompras.app.domain.entities.CompraProducto;
import com.miscompras.app.domain.entities.CompraProductoPK;

@Service
public class ImpCompraProducto implements CompraProductoService {
    @Autowired
    private CompraProductoRepository compraProductoRepository;

    @Transactional(readOnly = true)
    @Override
    public List<CompraProducto> findAll() {
        return (List<CompraProducto>) compraProductoRepository.findAll();

    }

    @Transactional(readOnly = true)
    @Override
    public CompraProducto findById(CompraProductoPK id) {
        return compraProductoRepository.findById(id).orElse(null);
    }

    @Transactional
    @Override
    public CompraProducto save(CompraProducto compraProducto) {
        return compraProductoRepository.save(compraProducto);
    }

    @Transactional
    @Override
    public CompraProducto update(CompraProductoPK id, CompraProducto compraProducto) {
        CompraProducto newCompraProducto = compraProductoRepository.findById(id).orElse(null);
        if (newCompraProducto != null) {
            newCompraProducto.setCantidad(compraProducto.getCantidad());
            newCompraProducto.setTotal(compraProducto.getTotal());
            newCompraProducto.setEstado(compraProducto.getEstado());
            return compraProductoRepository.save(newCompraProducto);
        }
        return null;
    }

    @Transactional
    @Override
    public CompraProducto delete(CompraProductoPK id) {
        CompraProducto compraProducto = compraProductoRepository.findById(id).orElse(null);
        if (compraProducto != null) {
            compraProductoRepository.delete(compraProducto);
        }
        return compraProducto;
    }

}
