package com.miscompras.app.infrastructure.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.miscompras.app.application.services.CompraProductoService;
import com.miscompras.app.domain.entities.CompraProducto;
import com.miscompras.app.domain.entities.CompraProductoPK;

@RestController
@RequestMapping("/api/comprasproductos")
public class CompraProductoController {
    @Autowired
    private CompraProductoService compraProductoService;

    @GetMapping
    public List<CompraProducto> list() {
        return compraProductoService.findAll();
    }

    @GetMapping("/{idcompra}/{idproducto}")
    public ResponseEntity<?> view(@PathVariable Long idcompra, @PathVariable Long idproducto) {
        CompraProductoPK id = new CompraProductoPK(idcompra, idproducto);
        CompraProducto compraProducto = compraProductoService.findById(id);
        if (compraProducto != null) {
            return ResponseEntity.ok(compraProducto);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody CompraProducto compraProducto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(compraProductoService.save(compraProducto));
    }

    @PutMapping("/{idcompra}/{idproducto}")
    public ResponseEntity<?> update(@PathVariable Long idcompra, @PathVariable Long idproducto,
            @RequestBody CompraProducto compraProducto) {
        CompraProductoPK id = new CompraProductoPK(idcompra, idproducto);
        CompraProducto newCompraProducto = compraProductoService.update(id, compraProducto);
        if (compraProducto != null) {
            return ResponseEntity.ok(newCompraProducto);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/{idcompra}/{idproducto}")
    public ResponseEntity<?> delete(@PathVariable Long idcompra, @PathVariable Long idproducto) {
        CompraProductoPK id = new CompraProductoPK(idcompra, idproducto);
        return ResponseEntity.status(HttpStatus.OK).body(compraProductoService.delete(id));
    }
}
