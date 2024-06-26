package com.mmul.geniusclone.repositories.auth;

import com.mmul.geniusclone.models.Performer;
import com.mmul.geniusclone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PerformerRepository extends JpaRepository<Performer, UUID> {
    Optional<Performer> findByEmail(String email);
}