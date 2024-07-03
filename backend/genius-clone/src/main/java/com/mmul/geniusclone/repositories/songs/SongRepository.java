package com.mmul.geniusclone.repositories.songs;

import com.mmul.geniusclone.models.Song;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository

public interface SongRepository extends JpaRepository<Song, UUID> {
}