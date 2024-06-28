package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.dtos.song.SongDTO;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface ISongService {

    Song create(SongDTO songDTO) throws IOException;

    Song update(UUID id, SongDTO songDTO) throws IOException;

    Song getById(UUID id);

    List<Song> getAll();

    void delete(UUID id);
}
