package com.mmul.geniusclone.controllers.playlists;


import com.mmul.geniusclone.dtos.playlists.delete.PlaylistRemoveSongsRequest;
import com.mmul.geniusclone.dtos.playlists.post.PlaylistCreateRequest;
import com.mmul.geniusclone.dtos.playlists.put.PlaylistAddSongsRequest;
import com.mmul.geniusclone.dtos.playlists.put.PlaylistUpdateRequest;
import com.mmul.geniusclone.models.Playlist;
import com.mmul.geniusclone.services.interfaces.IPlaylistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/playlists")
public class PlaylistController {
    private final IPlaylistService playlistService;

    public PlaylistController(IPlaylistService playlistService) {
        this.playlistService = playlistService;
    }

    @PostMapping
    public Playlist create(@RequestBody PlaylistCreateRequest request) {
        return playlistService.create(request);
    }

    @GetMapping
    public List<Playlist> getAll() {
        return playlistService.getAll();
    }

    @GetMapping("/users/{userId}/playlists")
    public List<Playlist> getByUserId(@PathVariable UUID userId) { return playlistService.getByUserId(userId); }

    @GetMapping("/{id}")
    public Playlist getById(@PathVariable UUID id) {
        return playlistService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable UUID id) {
        playlistService.delete(id);
    }

    @PostMapping("/{playlistId}/AddSongs")
    public Playlist addSongsToPlaylist(@PathVariable UUID playlistId, @RequestBody PlaylistAddSongsRequest request) {
        return playlistService.addSongs(playlistId, request);
    }

    @DeleteMapping("/{playlistId}/RemoveSongs")
    public Playlist removeSongsFromPlaylist(@PathVariable UUID playlistId, @RequestBody PlaylistRemoveSongsRequest request) {
        return playlistService.removeSongs(playlistId, request);
    }

    @PutMapping("/{id}")
    public Playlist updateAlbum(@PathVariable UUID id, @RequestBody PlaylistUpdateRequest request) {
        return playlistService.update(id, request);
    }
}
