package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.artist.ArtistCreateRequest;
import com.mmul.geniusclone.dtos.artist.ArtistUpdateRequest;
import com.mmul.geniusclone.models.Artist;

import java.util.List;
import java.util.UUID;

public interface IArtistService {
    public Artist getById(UUID id);
    public void delete(UUID id);
    public Artist create(ArtistCreateRequest request);
    public Artist update(UUID id, ArtistUpdateRequest request);
    public List<Artist> getAll();
    public void addMembership();
}
