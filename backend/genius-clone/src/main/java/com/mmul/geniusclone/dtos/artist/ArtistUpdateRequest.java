package com.mmul.geniusclone.dtos.artist;

import java.time.LocalDate;

public record ArtistUpdateRequest(String name, String surname, LocalDate birthday) { }