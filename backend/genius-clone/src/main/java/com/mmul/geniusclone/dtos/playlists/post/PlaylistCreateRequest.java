package com.mmul.geniusclone.dtos.playlists.post;

import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.models.User;

import java.util.List;

public record PlaylistCreateRequest(String name, User user, List<Song> songs) {
}
