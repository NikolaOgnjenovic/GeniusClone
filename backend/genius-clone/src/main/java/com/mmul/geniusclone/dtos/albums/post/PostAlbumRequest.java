package com.mmul.geniusclone.dtos.albums.post;

import com.mmul.geniusclone.models.Album;

import java.time.LocalDate;

public record PostAlbumRequest(String title, LocalDate releaseDate, byte[] coverArt){
}
