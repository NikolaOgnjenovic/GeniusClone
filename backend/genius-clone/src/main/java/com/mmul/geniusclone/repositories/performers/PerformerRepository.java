package com.mmul.geniusclone.repositories.performers;

import com.mmul.geniusclone.models.Performer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PerformerRepository extends JpaRepository<Performer, UUID> {
}
