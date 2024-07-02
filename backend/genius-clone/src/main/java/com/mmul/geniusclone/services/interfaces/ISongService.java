package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.song.SongCreateRequest;
import com.mmul.geniusclone.dtos.song.SongUpdateRequest;
import com.mmul.geniusclone.models.Song;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface ISongService {

    Song create(SongCreateRequest songDTO) throws IOException;

    Song update(UUID id, SongUpdateRequest songDTO) throws IOException;

    Song getById(UUID id);

    List<Song> getAll();

    void delete(UUID id);
}
