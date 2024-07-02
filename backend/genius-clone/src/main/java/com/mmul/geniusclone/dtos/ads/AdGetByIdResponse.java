package com.mmul.geniusclone.dtos.ads;

import com.mmul.geniusclone.models.Genre;

import java.util.UUID;

public record AdGetByIdResponse(UUID id, String link, byte[] image, Genre genre) { }
