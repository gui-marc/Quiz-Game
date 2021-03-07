package com.guilherme.backend.controller;

import java.util.List;

import com.guilherme.backend.models.Alternative;
import com.guilherme.backend.repositories.AlternativeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

// FOR DEV PURPOSES

@RestController
@RequestMapping("/alternatives")
public class AlternativeController {

    @Autowired
    private AlternativeRepository alternativeRepository;

    @GetMapping
    public List<Alternative> getAlternatives() {
        return alternativeRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Alternative addAlternative(@RequestBody Alternative alternative) {
        return alternativeRepository.save(alternative);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteAlternative(@PathVariable Long id) {
        alternativeRepository.deleteById(id);
    }
}
