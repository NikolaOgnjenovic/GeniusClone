package com.mmul.geniusclone.repositories.genres;

import com.mmul.geniusclone.models.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GenreRepository extends JpaRepository<Genre, UUID> {

}
