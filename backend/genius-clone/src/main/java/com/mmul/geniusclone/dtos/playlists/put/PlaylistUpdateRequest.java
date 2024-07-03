package com.mmul.geniusclone.dtos.playlists.put;

import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.models.User;

import java.util.List;

public record PlaylistUpdateRequest(String name, User user, List<Song> songs) {
}
