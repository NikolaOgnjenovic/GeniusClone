package com.mmul.geniusclone.services.song;

import com.mmul.geniusclone.dtos.song.SongCreateRequest;
import com.mmul.geniusclone.dtos.song.SongUpdateRequest;
import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.repositories.song.SongRepository;
import com.mmul.geniusclone.services.interfaces.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public class SongService implements ISongService {

    @Autowired
    private SongRepository songRepository;

    @Override
    public Song create(SongCreateRequest request) {
        Song song = new Song(request.link(), false, request.title());
        return songRepository.save(song);
    }

    @Override
    public Song update(UUID id, SongUpdateRequest request) throws IOException {
        Song song = songRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        Song updatedSong = new Song(request.link(), false, request.title());
        updatedSong.setId(song.getId());
        return songRepository.save(updatedSong);
    }

    @Override
    public Song getById(UUID id) {
        return songRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
    }

    @Override
    public List<Song> getAll() {
        return songRepository.findAll();
    }

    @Override
    public void delete(UUID id) {
        songRepository.deleteById(id);
    }
}
