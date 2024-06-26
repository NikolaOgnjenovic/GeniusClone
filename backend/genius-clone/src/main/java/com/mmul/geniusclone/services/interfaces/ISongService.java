package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.dtos.song.SongDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface ISongService {

    Song saveSong(SongDTO songDTO) throws IOException;

    Song updateSong(UUID id, SongDTO songDTO) throws IOException;

    Song getSong(UUID id);

    List<Song> getAllSongs();

    void deleteSong(UUID id);
}
