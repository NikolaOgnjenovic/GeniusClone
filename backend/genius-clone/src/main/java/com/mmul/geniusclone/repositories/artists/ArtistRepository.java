package com.mmul.geniusclone.repositories.artists;

import com.mmul.geniusclone.models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, UUID> {
}