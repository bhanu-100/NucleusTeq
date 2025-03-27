package com.backend.collegeLevelCounselling.repositories;

import com.backend.collegeLevelCounselling.models.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface StudentRepoInterface extends JpaRepository<StudentModel, Long> {
    Optional<StudentModel> findByEmail(String email);

}
