package com.mmul.geniusclone.controllers.song;

import com.mmul.geniusclone.dtos.song.SongDTO;
import com.mmul.geniusclone.models.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mmul.geniusclone.services.song.SongService;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/songs")
public class SongController {

    @Autowired
    private SongService songService;

    @PostMapping
    public Song create(@RequestBody SongDTO song) {
        return songService.create(song);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable UUID id,
                                             @RequestBody SongDTO song) {
        try {
            songService.update(id, song);
            return ResponseEntity.ok("Song updated successfully!");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to update song.");
        }
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
    public ResponseEntity<String> delete(@PathVariable UUID id) {
        songService.delete(id);
        return ResponseEntity.ok("Song deleted successfully!");
    }
}
