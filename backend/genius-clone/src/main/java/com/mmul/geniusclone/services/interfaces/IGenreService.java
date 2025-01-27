package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.genres.*;
import com.mmul.geniusclone.models.Genre;

import java.util.UUID;

public interface IGenreService {
    GenreCreateResponse create(GenreCreateRequest request);
    GenreDeleteResponse delete(GenreDeleteRequest request);
    GenreGetAllResponse getAll();
    Genre getById(UUID id);
    Genre update(UUID id, GenreUpdateRequest request);
}
