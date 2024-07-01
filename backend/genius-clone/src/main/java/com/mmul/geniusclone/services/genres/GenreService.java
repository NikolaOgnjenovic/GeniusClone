package com.mmul.geniusclone.services.genres;

import com.mmul.geniusclone.dtos.genres.GenreDeleteResponse;
import com.mmul.geniusclone.dtos.genres.GenreGetAllResponse;
import com.mmul.geniusclone.dtos.genres.GenreGetByIdResponse;
import com.mmul.geniusclone.dtos.genres.GenreCreateResponse;
import com.mmul.geniusclone.dtos.genres.*;
import com.mmul.geniusclone.dtos.song.SongDTO;
import com.mmul.geniusclone.models.Genre;
import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.repositories.genres.GenreRepository;
import com.mmul.geniusclone.services.interfaces.IGenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class GenreService implements IGenreService {
    @Autowired
    private GenreRepository genreRepository;

    @Override
    public GenreCreateResponse create(GenreCreateRequest request) {
        Genre genre = new Genre(request.name());
        genreRepository.save(genre);

        return new GenreCreateResponse(genre.getId(), genre.getName());
    }

    @Override
    public GenreDeleteResponse delete(GenreDeleteRequest request) {
        genreRepository.findById(request.id())
                .orElseThrow(() -> new RuntimeException("Genre not found"));
        genreRepository.deleteById(request.id());
        return new GenreDeleteResponse();
    }

    @Override
    public GenreGetAllResponse getAll() {
        List<Genre> genres = genreRepository.findAll();

        return new GenreGetAllResponse(genres);
    }

    @Override
    public GenreGetByIdResponse getById(GenreGetByIdRequest request) {
        Genre genre = genreRepository.findById(request.id())
                .orElseThrow(() -> new RuntimeException("Genre not found"));

        return new GenreGetByIdResponse(genre.getId(), genre.getName());
    }

    @Override
    public Genre update(UUID id, GenreUpdateRequest request) {
        Genre genre = genreRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        genre.setName(request.name());
        return genreRepository.save(genre);
    }

}
