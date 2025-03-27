package com.backend.collegeLevelCounselling.repositories;

import com.backend.collegeLevelCounselling.models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface UserRepoInterface extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByEmail(String email);

}
