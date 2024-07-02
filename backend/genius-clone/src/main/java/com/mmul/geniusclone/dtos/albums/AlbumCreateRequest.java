package com.mmul.geniusclone.dtos.albums;

import java.time.LocalDate;

public record AlbumCreateRequest(String title, LocalDate releaseDate, String coverArt) { }