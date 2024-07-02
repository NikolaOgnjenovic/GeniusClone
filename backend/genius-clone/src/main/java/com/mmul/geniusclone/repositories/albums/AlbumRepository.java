package com.mmul.geniusclone.repositories.albums;

import com.mmul.geniusclone.models.Album;
import com.mmul.geniusclone.models.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AlbumRepository extends JpaRepository<Album, UUID> {
}
