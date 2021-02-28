package com.guilherme.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.guilherme.backend.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

}