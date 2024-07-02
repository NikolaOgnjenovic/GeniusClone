package com.mmul.geniusclone.dtos.playlists.put;

import java.util.List;

public record PlaylistAddSongsRequest(List<String> songIds) {
}
