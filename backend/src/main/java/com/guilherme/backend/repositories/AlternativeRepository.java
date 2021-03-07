package com.guilherme.backend.repositories;

import com.guilherme.backend.models.Alternative;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlternativeRepository extends JpaRepository<Alternative, Long> {

}
