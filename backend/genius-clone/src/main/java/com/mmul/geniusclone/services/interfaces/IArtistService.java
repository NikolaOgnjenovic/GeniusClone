package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.artist.post.PostArtistRequest;
import com.mmul.geniusclone.dtos.artist.put.PutArtistUpdateRequest;
import com.mmul.geniusclone.models.Artist;

import java.util.List;
import java.util.UUID;

public interface IArtistService {
    public Artist getById(UUID id);
    public void delete(UUID id);
    public Artist create(PostArtistRequest request);
    public Artist update(UUID id, PutArtistUpdateRequest request);
    public List<Artist> getAll();
    public void addMembership();
}
