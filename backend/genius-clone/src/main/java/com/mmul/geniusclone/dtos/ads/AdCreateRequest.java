package com.mmul.geniusclone.dtos.ads;

import com.mmul.geniusclone.models.Genre;

import java.util.UUID;

public record AdCreateRequest(String link, String image, Genre genre) {}
