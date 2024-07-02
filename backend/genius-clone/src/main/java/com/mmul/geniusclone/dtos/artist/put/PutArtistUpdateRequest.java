package com.mmul.geniusclone.dtos.artist.put;

import java.time.LocalDate;

public record PutArtistUpdateRequest(String name, String surname, LocalDate birthday, String description, String image) {
}
