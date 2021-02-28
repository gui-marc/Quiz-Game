package com.guilherme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // No real use in API

    @Column(nullable = false)
    private String heading;
    @Column(nullable = false)
    private String[] answers;
    @Column(nullable = false)
    private Integer answerIndex;
}
