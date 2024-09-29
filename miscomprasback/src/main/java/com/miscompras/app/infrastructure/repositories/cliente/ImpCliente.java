package com.miscompras.app.infrastructure.repositories.cliente;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.miscompras.app.application.services.ClienteService;
import com.miscompras.app.domain.entities.Cliente;

@Service
public class ImpCliente implements ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Cliente> findAll() {
        return (List<Cliente>) clienteRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Override
    public Cliente findById(String id) {
        return clienteRepository.findById(id).orElse(null);
    }

    @Transactional
    @Override
    public Cliente save(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Transactional
    @Override
    public Cliente update(String id, Cliente cliente) {
        Cliente newCliente = clienteRepository.findById(id).orElse(null);
        if (newCliente != null) {
            newCliente.setId(cliente.getId());
            newCliente.setName(cliente.getName());
            newCliente.setApellido(cliente.getApellido());
            newCliente.setCelular(cliente.getCelular());
            newCliente.setDireccion(cliente.getDireccion());
            newCliente.setCorreo_electronico(cliente.getCorreo_electronico());
            return clienteRepository.save(newCliente);
        }
        return null;
    }

    @Transactional
    @Override
    public Cliente delete(String id) {
        Cliente cliente = clienteRepository.findById(id).orElse(null);
        if (cliente != null) {
            clienteRepository.delete(cliente);
        }
        return cliente;
    }
}
