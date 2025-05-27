package com.example.unidades;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/unidades")
public class UnidadeSaudeController {

    @Autowired
    private UnidadeSaudeRepository repository;

    @GetMapping
    public List<UnidadeSaude> listar() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public UnidadeSaude buscar(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PostMapping
    public UnidadeSaude adicionar(@RequestBody UnidadeSaude unidade) {
        return repository.save(unidade);
    }

    @PutMapping("/{id}")
    public UnidadeSaude atualizar(@PathVariable Long id, @RequestBody UnidadeSaude novaUnidade) {
        return repository.findById(id).map(u -> {
            u.setNome(novaUnidade.getNome());
            u.setEndereco(novaUnidade.getEndereco());
            u.setBairro(novaUnidade.getBairro());
            u.setCidade(novaUnidade.getCidade());
            u.setEstado(novaUnidade.getEstado());
            u.setLatitude(novaUnidade.getLatitude());
            u.setLongitude(novaUnidade.getLongitude());
            u.setHorario(novaUnidade.getHorario());
            u.setTelefone(novaUnidade.getTelefone());
            return repository.save(u);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
