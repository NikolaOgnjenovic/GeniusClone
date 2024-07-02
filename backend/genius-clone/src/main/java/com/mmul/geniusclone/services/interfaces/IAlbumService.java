package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.albums.post.PostAlbumRequest;
import com.mmul.geniusclone.dtos.albums.put.PutAlbumUpdateRequest;
import com.mmul.geniusclone.dtos.artist.post.PostArtistRequest;
import com.mmul.geniusclone.dtos.artist.put.PutArtistUpdateRequest;
import com.mmul.geniusclone.models.Album;
import com.mmul.geniusclone.models.Artist;

import java.util.List;
import java.util.UUID;

public interface IAlbumService {
    public Album getById(UUID id);
    public void delete(UUID id);
    public Album create(PostAlbumRequest request);
    public Album update(UUID id, PutAlbumUpdateRequest request);
    public List<Album> getAll();
    public Album setPerformer(UUID albumId, UUID performerId);
    public Album removePerformer(UUID albumId, UUID performerId);
}
