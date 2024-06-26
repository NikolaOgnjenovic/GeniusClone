package com.mmul.geniusclone.repositories.auth;

import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.models.Performer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, UUID> {
}