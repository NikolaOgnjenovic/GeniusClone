package com.mmul.geniusclone.dtos.genres;

import com.mmul.geniusclone.models.Genre;

import java.util.List;

public record GenreGetAllResponse(List<Genre> genres) {
}
