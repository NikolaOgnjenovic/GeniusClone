package com.mmul.geniusclone.dtos.reviews;

import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.models.User;

import java.util.UUID;

public record ReviewCreateResponse(UUID id, User user, Song song, short value, String description) {
}
