package com.mmul.geniusclone.controllers.albums;


import com.mmul.geniusclone.dtos.albums.AlbumAddGenreRequest;
import com.mmul.geniusclone.dtos.albums.AlbumAddPerformerRequest;
import com.mmul.geniusclone.dtos.albums.AlbumCreateRequest;
import com.mmul.geniusclone.dtos.albums.AlbumUpdateRequest;
import com.mmul.geniusclone.models.Album;
import com.mmul.geniusclone.services.interfaces.IAlbumService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/albums")
public class AlbumController {
    private final IAlbumService albumService;

    public AlbumController(IAlbumService albumService) {
        this.albumService = albumService;
    }

    @PostMapping
    public Album create(@RequestBody AlbumCreateRequest request) {
        return albumService.create(request);
    }

    @GetMapping
    public List<Album> getAll() {
        return albumService.getAll();
    }

    @GetMapping("/{id}")
    public Album getById(@PathVariable UUID id) {
        return albumService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable UUID id) {
        albumService.delete(id);
    }

    @PostMapping("/{albumId}/performers")
    public Album addPerformerToAlbum(@PathVariable UUID albumId, @RequestBody AlbumAddPerformerRequest request) {
        return albumService.addPerformer(albumId, request);
    }

    @DeleteMapping("/{albumId}/performers/{id}")
    public Album removePerformerFromAlbum(@PathVariable UUID albumId,  @PathVariable UUID id) {
        return albumService.removePerformer(albumId, id);
    }

    @PutMapping("/{id}")
    public Album updateAlbum(@PathVariable UUID id, @RequestBody AlbumUpdateRequest request) {
        return albumService.update(id, request);
    }

    @PostMapping("/{albumId}/genres")
    public Album addGenreToAlbum(@PathVariable UUID albumId, @RequestBody AlbumAddGenreRequest request) {
        return albumService.addGenre(albumId, request.genreId());
    }

    @DeleteMapping("/{albumId}/genres/{genreId}")
    public Album removeGenreFromAlbum(@PathVariable UUID albumId, @PathVariable UUID genreId) {
        return albumService.removeGenre(albumId, genreId);
    }
}
