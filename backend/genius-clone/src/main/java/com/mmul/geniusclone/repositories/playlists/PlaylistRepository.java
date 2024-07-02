package com.mmul.geniusclone.repositories.playlists;

import com.mmul.geniusclone.models.Playlist;
import com.mmul.geniusclone.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, UUID> {
    List<Playlist> findByUserId(UUID userId);
}
