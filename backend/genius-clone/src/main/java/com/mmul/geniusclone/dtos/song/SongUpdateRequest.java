package com.mmul.geniusclone.dtos.song;

import java.util.UUID;

public record SongUpdateRequest(String link, String title, UUID albumId) { }