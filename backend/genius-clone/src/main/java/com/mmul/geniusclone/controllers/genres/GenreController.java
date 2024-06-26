package com.mmul.geniusclone.controllers.genres;

import com.mmul.geniusclone.dtos.genres.*;
import com.mmul.geniusclone.services.interfaces.IGenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/genre")
public class GenreController {
    @Autowired
    private IGenreService genreService;

    @PostMapping()
    public ResponseEntity<GenreCreateResponse> createGenre(@RequestBody GenreCreateRequest request) {
        try {
            GenreCreateResponse response = genreService.create(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping()
    public ResponseEntity<GenreGetAllResponse> getAllGenres() {
        try {
            GenreGetAllResponse response = genreService.getAll();
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<GenreGetByIdResponse> getGenreById(@PathVariable UUID id) {
        try {
            GenreGetByIdRequest request = new GenreGetByIdRequest(id);
            GenreGetByIdResponse response = genreService.getById(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenreDeleteResponse> deleteGenre(@PathVariable UUID id) {
        try {
            GenreDeleteRequest request = new GenreDeleteRequest(id);
            GenreDeleteResponse response = genreService.delete(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
