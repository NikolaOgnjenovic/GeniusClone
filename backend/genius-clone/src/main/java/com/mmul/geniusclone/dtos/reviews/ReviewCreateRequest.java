package com.mmul.geniusclone.dtos.reviews;

import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.models.User;

public record ReviewCreateRequest(User user, Song song, short value, String description) {}
