package com.mmul.geniusclone.dtos.song;

import java.util.UUID;

public record SongCreateRequest(String link, String title, UUID albumId) { }