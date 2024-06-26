package com.mmul.geniusclone.dtos.ads;

import java.util.UUID;

public record AdGetByIdResponse(UUID id, String link, byte[] image, UUID genreId) { }
