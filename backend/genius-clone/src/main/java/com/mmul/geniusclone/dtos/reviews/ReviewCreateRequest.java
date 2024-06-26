package com.mmul.geniusclone.dtos.reviews;

import java.util.UUID;

public record ReviewCreateRequest(UUID userId, UUID songId, short value, String description) {}
