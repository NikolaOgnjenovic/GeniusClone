package com.mmul.geniusclone.dtos.albums;

import java.time.LocalDate;

public record AlbumUpdateRequest(String title, LocalDate releaseDate, String coverArt) {
}
