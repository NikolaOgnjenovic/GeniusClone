package com.mmul.geniusclone.repositories.song;

import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface SongRepository extends JpaRepository<Song, UUID> {

}