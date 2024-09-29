package com.miscompras.app.infrastructure.repositories.producto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miscompras.app.application.services.ProductoService;
import com.miscompras.app.domain.entities.Producto;

@Service
public class ImpProducto implements ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Producto> findAll() {
        return (List<Producto>) productoRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Producto findById(Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    @Override
    public Producto save(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Producto update(Long id, Producto producto) {
        Producto newProducto = productoRepository.findById(id).orElse(null);
        if (newProducto != null) {
            newProducto.setNombre(producto.getNombre());
            newProducto.setCodigo_barras(producto.getCodigo_barras());
            newProducto.setPrecio_venta(producto.getPrecio_venta());
            newProducto.setCantidad_stock(producto.getCantidad_stock());
            newProducto.setEstado(producto.getEstado());
            newProducto.setCategoria(producto.getCategoria());
            return productoRepository.save(newProducto);
        }
        return null;
    }

    @Override
    public Producto delete(Long id) {
        Producto producto = productoRepository.findById(id).orElse(null);
        if (producto != null) {
            productoRepository.delete(producto);
        }
        return producto;
    }

}
