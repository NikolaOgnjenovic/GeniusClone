package com.mmul.geniusclone.controllers.artists;


import com.mmul.geniusclone.dtos.artist.ArtistCreateRequest;
import com.mmul.geniusclone.dtos.artist.ArtistUpdateRequest;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.services.interfaces.IArtistService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/artists")
public class ArtistController {
    private final IArtistService artistService;

    public ArtistController(IArtistService artistService) {
        this.artistService = artistService;
    }

    @GetMapping
    public List<Artist> getAll() {
        return artistService.getAll();
    }

    @GetMapping("/{id}")
    public Artist getById(@PathVariable UUID id) {
        return artistService.getById(id);
    }

    @PostMapping
    public Artist create(@RequestBody ArtistCreateRequest request) {
        return artistService.create(request);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable UUID id) {
        artistService.delete(id);
    }

    @PutMapping("/{id}")
    public Artist update(@PathVariable UUID id, @RequestBody ArtistUpdateRequest request) {
        return artistService.update(id, request);
    }
}