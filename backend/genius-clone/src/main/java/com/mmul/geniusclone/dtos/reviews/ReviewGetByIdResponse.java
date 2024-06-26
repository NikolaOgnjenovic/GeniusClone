package com.mmul.geniusclone.dtos.reviews;

import java.util.UUID;

public record ReviewGetByIdResponse(UUID id, UUID userId, UUID songId, short value, String description) { }
