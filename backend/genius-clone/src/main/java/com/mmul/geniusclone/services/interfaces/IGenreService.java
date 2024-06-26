package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.genres.*;

public interface IGenreService {
    GenreCreateResponse create(GenreCreateRequest request);
    GenreDeleteResponse delete(GenreDeleteRequest request);
    GenreGetAllResponse getAll();
    GenreGetByIdResponse getById(GenreGetByIdRequest request);
}
