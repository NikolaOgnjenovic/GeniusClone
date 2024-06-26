package com.mmul.geniusclone.dtos.auth.post;

import java.time.LocalDate;

public record PostArtistRequest(String name, String surname, LocalDate birthday) {
}
