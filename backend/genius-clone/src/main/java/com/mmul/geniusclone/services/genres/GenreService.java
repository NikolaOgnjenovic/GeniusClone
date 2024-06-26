package com.mmul.geniusclone.services.genres;

import com.mmul.geniusclone.dtos.genres.*;
import com.mmul.geniusclone.repositories.genres.GenreRepository;
import com.mmul.geniusclone.services.interfaces.IGenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenreService implements IGenreService {
    @Autowired
    private GenreRepository genreRepository;

    @Override
    public GenreCreateResponse create(GenreCreateRequest request) {
        return null;
    }

    @Override
    public GenreDeleteResponse delete(GenreDeleteRequest request) {
        return null;
    }

    @Override
    public GenreGetAllResponse getAll() {
        return null;
    }

    @Override
    public GenreGetByIdResponse getById(GenreGetByIdRequest request) {
        return null;
    }

}
