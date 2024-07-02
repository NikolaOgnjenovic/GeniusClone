package com.mmul.geniusclone.controllers.genres;

import com.mmul.geniusclone.dtos.genres.*;
import com.mmul.geniusclone.models.Genre;
import com.mmul.geniusclone.services.interfaces.IGenreService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/genres")
public class GenreController {
    private final IGenreService genreService;

    GenreController(IGenreService genreService) {
        this.genreService = genreService;
    }

    @PostMapping()
    public ResponseEntity<GenreCreateResponse> create(@RequestBody GenreCreateRequest request) {
        try {
            GenreCreateResponse response = genreService.create(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping()
    public ResponseEntity<GenreGetAllResponse> getAll() {
        try {
            GenreGetAllResponse response = genreService.getAll();
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<GenreGetByIdResponse> getById(@PathVariable UUID id) {
        try {
            GenreGetByIdRequest request = new GenreGetByIdRequest(id);
            GenreGetByIdResponse response = genreService.getById(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }

    }

    @PutMapping("/{id}")
    public Genre update(@PathVariable UUID id, @RequestBody GenreUpdateRequest request) throws IOException {
        return genreService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GenreDeleteResponse> deleteById(@PathVariable UUID id) {
        try {
            GenreDeleteRequest request = new GenreDeleteRequest(id);
            GenreDeleteResponse response = genreService.delete(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
