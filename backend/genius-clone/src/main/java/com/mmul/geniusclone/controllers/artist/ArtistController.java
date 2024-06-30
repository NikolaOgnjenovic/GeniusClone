package com.mmul.geniusclone.controllers.artist;


import com.mmul.geniusclone.dtos.artist.post.PostArtistRequest;
import com.mmul.geniusclone.dtos.artist.put.PutArtistUpdateRequest;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.services.artist.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/artist")
public class ArtistController {
    @Autowired
    private ArtistService artistService;

    @GetMapping
    public List<Artist> getAllArtists() {
        return artistService.getAll();
    }

    @GetMapping("/{id}")
    public Artist getArtist(@PathVariable UUID id) {
        return artistService.getById(id);
    }

    @PostMapping
    public Artist createArtist(@RequestBody PostArtistRequest request) {
        return artistService.create(request);
    }

    @DeleteMapping("/{id}")
    public void deleteArtist(@PathVariable UUID id) {
        artistService.delete(id);
    }

    @PutMapping("/{id}")
    public Artist updateSong(@PathVariable UUID id,
                                             @RequestBody PutArtistUpdateRequest request) {

        return artistService.update(id, request);
    }
}