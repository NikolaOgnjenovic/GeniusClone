package com.mmul.geniusclone.dtos.albums;

import com.mmul.geniusclone.models.Genre;

import java.time.LocalDate;
import java.util.List;

public record AlbumUpdateRequest(String title, LocalDate releaseDate, String coverArt, List<Genre> genres) {
}
