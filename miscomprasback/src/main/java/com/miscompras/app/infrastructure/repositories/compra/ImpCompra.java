package com.miscompras.app.infrastructure.repositories.compra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miscompras.app.application.services.CompraService;
import com.miscompras.app.domain.entities.Compra;

@Service
public class ImpCompra implements CompraService {
    @Autowired
    private CompraRepository compraRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Compra> findAll() {
        return (List<Compra>) compraRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Compra findById(Long id) {
        return compraRepository.findById(id).orElse(null);
    }

    @Transactional
    @Override
    public Compra save(Compra compra) {
        return compraRepository.save(compra);
    }

    @Transactional
    @Override
    public Compra update(Long id, Compra compra) {
        Compra newCompra = compraRepository.findById(id).orElse(null);
        if (newCompra != null) {
            newCompra.setFecha(compra.getFecha());
            newCompra.setMedio_pago(compra.getMedio_pago());
            newCompra.setComentario(compra.getComentario());
            newCompra.setEstado(compra.getEstado());
            newCompra.setCliente(compra.getCliente());
            return compraRepository.save(newCompra);
        }
        return null;
    }

    @Transactional
    @Override
    public Compra delete(Long id) {
        Compra compra = compraRepository.findById(id).orElse(null);
        if (compra != null) {
            compraRepository.delete(compra);
        }
        return compra;
    }

}
