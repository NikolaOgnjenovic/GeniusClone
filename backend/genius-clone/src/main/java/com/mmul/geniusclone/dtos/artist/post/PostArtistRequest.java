package com.mmul.geniusclone.dtos.artist.post;

import java.time.LocalDate;

public record PostArtistRequest(String name, String surname, LocalDate birthday, String description, String image) {
}
