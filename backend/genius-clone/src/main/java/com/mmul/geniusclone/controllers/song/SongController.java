package com.mmul.geniusclone.controllers.song;

import com.mmul.geniusclone.dtos.song.SongCreateRequest;
import com.mmul.geniusclone.dtos.song.SongUpdateRequest;
import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.services.interfaces.ISongService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/songs")
public class SongController {
    private final ISongService songService;

    public SongController(ISongService songService) {
        this.songService = songService;
    }

    @PostMapping
    public Song create(@RequestBody SongCreateRequest request) throws IOException {
        return songService.create(request);
    }

    @PutMapping("/{id}")
    public Song update(@PathVariable UUID id, @RequestBody SongUpdateRequest request) throws IOException {
        return songService.update(id, request);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> getById(@PathVariable UUID id) {
        Song song = songService.getById(id);
        return ResponseEntity.ok(song);
    }

    @GetMapping
    public ResponseEntity<List<Song>> getAll() {
        List<Song> songs = songService.getAll();
        return ResponseEntity.ok(songs);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable UUID id) {
        songService.delete(id);
    }
}
