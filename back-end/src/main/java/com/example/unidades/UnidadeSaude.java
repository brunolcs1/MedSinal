package com.example.unidades;

import jakarta.persistence.*;

@Entity
public class UnidadeSaude {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String endereco;
    private String bairro;
    private String cidade;
    private String estado;
    private Double latitude;
    private Double longitude;
    private String horario;
    private String telefone;

    // Getters e setters omitidos para brevidade
}
