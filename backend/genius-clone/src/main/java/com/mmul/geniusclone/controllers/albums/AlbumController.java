package com.mmul.geniusclone.controllers.albums;

import com.mmul.geniusclone.dtos.albums.post.PostAlbumRequest;
import com.mmul.geniusclone.dtos.albums.put.PutAlbumUpdateRequest;
import com.mmul.geniusclone.dtos.artist.post.PostArtistRequest;
import com.mmul.geniusclone.dtos.artist.put.PutArtistUpdateRequest;
import com.mmul.geniusclone.dtos.band.post.PostBandRequest;
import com.mmul.geniusclone.models.Album;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.models.Band;
import com.mmul.geniusclone.services.albums.AlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/album")
public class AlbumController {
    @Autowired
    private AlbumService albumService;

    @GetMapping
    public List<Album> getAllAlbums() {
        return albumService.getAll();
    }

    @GetMapping("/{id}")
    public Album getBand(@PathVariable UUID id) {
        return albumService.getById(id);
    }

    @PostMapping
    public void createAlbum(@RequestBody PostAlbumRequest request) {
        albumService.create(request);
    }

    @DeleteMapping("/{id}")
    public void deleteArtist(@PathVariable UUID id) {
        albumService.delete(id);
    }

    @PostMapping("/{albumId}/setPerformer/{performerId}")
    public Album addPerformerToAlbum(@PathVariable UUID albumId, @PathVariable UUID performerId) {
        return albumService.setPerformer(albumId, performerId);
    }

    @DeleteMapping("/{albumId}/removePerformer/{performerId}")
    public Album removeArtistFromBand(@PathVariable UUID albumId, @PathVariable UUID performerId) {
        return albumService.removePerformer(albumId, performerId);
    }

    @PutMapping("/update/{id}")
    public Album updateAlbum(@PathVariable UUID id,
                           @RequestBody PutAlbumUpdateRequest request) {

        return albumService.update(id, request);
    }

    @PutMapping("/{albumId}/addGenre/{genreId}")
    public Album addGenreToAlbum(@PathVariable UUID albumId, @PathVariable UUID genreId) {
        return albumService.addGenre(albumId, genreId);
    }

    @DeleteMapping("/{albumId}/removeGenre/{genreId}")
    public Album removeGenreFromAlbum(@PathVariable UUID albumId, @PathVariable UUID genreId) {
        return albumService.removeGenre(albumId, genreId);
    }
}
