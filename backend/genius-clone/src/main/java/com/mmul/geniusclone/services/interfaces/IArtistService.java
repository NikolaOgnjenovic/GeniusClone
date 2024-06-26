package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.auth.post.PostArtistRequest;
import com.mmul.geniusclone.models.Artist;

import java.util.List;
import java.util.UUID;

public interface IArtistService {
    public Artist getById(UUID id);
    public void delete(UUID id);
    public void add(PostArtistRequest artist);
    public List<Artist> getAll();
}
