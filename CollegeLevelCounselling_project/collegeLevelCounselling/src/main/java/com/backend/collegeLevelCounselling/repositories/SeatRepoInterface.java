package com.backend.collegeLevelCounselling.repositories;

import com.backend.collegeLevelCounselling.models.SeatModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Optional;

@RepositoryRestResource
public interface SeatRepoInterface extends JpaRepository<SeatModel, Integer> {
    Optional<SeatModel> findByBranch(String branch);
}
