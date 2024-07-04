package com.mmul.geniusclone.repositories.band;

import com.mmul.geniusclone.models.Band;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BandRepository extends JpaRepository<Band, UUID> {
}