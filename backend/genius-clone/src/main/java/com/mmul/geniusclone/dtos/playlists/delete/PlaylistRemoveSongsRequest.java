package com.mmul.geniusclone.dtos.playlists.delete;

import java.util.List;

public record PlaylistRemoveSongsRequest(String playlistId, List<String> songIds) {
}
