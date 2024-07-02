package com.mmul.geniusclone.dtos.artist;

import java.time.LocalDate;

public record ArtistCreateRequest(String name, String surname, LocalDate birthday) { }