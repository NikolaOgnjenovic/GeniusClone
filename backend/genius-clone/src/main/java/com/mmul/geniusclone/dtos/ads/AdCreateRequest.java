package com.mmul.geniusclone.dtos.ads;

import java.util.UUID;

public record AdCreateRequest(String link, byte[] image, UUID genreId) {}
