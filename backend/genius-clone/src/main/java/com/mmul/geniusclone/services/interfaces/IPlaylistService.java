package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.playlists.delete.PlaylistRemoveSongsRequest;
import com.mmul.geniusclone.dtos.playlists.post.PlaylistCreateRequest;
import com.mmul.geniusclone.dtos.playlists.put.PlaylistAddSongsRequest;
import com.mmul.geniusclone.dtos.playlists.put.PlaylistUpdateRequest;
import com.mmul.geniusclone.models.Playlist;

import java.util.List;
import java.util.UUID;

public interface IPlaylistService {
    Playlist getById(UUID id);
    void delete(UUID id);
    Playlist create(PlaylistCreateRequest request);
    Playlist update(UUID id, PlaylistUpdateRequest request);
    List<Playlist> getAll();
    List<Playlist> getByUserId(UUID userId);
    Playlist addSongs(UUID playlistId, PlaylistAddSongsRequest request);
    Playlist removeSongs(UUID playlistId, PlaylistRemoveSongsRequest request);
}
