package com.mmul.geniusclone.repositories.auth;

import com.mmul.geniusclone.models.Band;
import com.mmul.geniusclone.models.Performer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface BandRepository extends JpaRepository<Band, UUID> {
}