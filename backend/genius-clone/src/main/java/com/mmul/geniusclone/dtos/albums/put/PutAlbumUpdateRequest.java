package com.mmul.geniusclone.dtos.albums.put;

import java.time.LocalDate;

public record PutAlbumUpdateRequest(String title, LocalDate releaseDate, String coverArt) {
}
