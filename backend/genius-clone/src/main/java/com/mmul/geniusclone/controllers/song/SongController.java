package com.mmul.geniusclone.controllers.song;

import com.mmul.geniusclone.dtos.song.SongDTO;
import com.mmul.geniusclone.models.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.mmul.geniusclone.services.song.SongService;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/songs")
public class SongController {

    @Autowired
    private SongService songService;

    @PostMapping("")
    public ResponseEntity<String> uploadSong(@RequestBody SongDTO song) {
        try {
            songService.saveSong(song);
            return ResponseEntity.ok("Song uploaded successfully!");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to upload song.");
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateSong(@PathVariable UUID id,
                                             @RequestBody SongDTO song) {
        try {
            songService.updateSong(id, song);
            return ResponseEntity.ok("Song updated successfully!");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to update song.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Song> getSong(@PathVariable UUID id) {
        Song song = songService.getSong(id);
        return ResponseEntity.ok(song);
    }

    @GetMapping
    public ResponseEntity<List<Song>> getAllSongs() {
        List<Song> songs = songService.getAllSongs();
        return ResponseEntity.ok(songs);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSong(@PathVariable UUID id) {
        songService.deleteSong(id);
        return ResponseEntity.ok("Song deleted successfully!");
    }
}
