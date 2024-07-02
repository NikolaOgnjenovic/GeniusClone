package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.albums.AlbumCreateRequest;
import com.mmul.geniusclone.dtos.albums.AlbumUpdateRequest;
import com.mmul.geniusclone.models.Album;

import java.util.List;
import java.util.UUID;

public interface IAlbumService {
     Album getById(UUID id);
     void delete(UUID id);
     Album create(AlbumCreateRequest request);
     Album update(UUID id, AlbumUpdateRequest request);
     List<Album> getAll();
     Album setPerformer(UUID albumId, UUID performerId);
     Album removePerformer(UUID albumId, UUID performerId);
}
