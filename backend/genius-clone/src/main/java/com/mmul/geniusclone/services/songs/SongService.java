package com.mmul.geniusclone.services.songs;

import com.mmul.geniusclone.dtos.song.SongCreateRequest;
import com.mmul.geniusclone.dtos.song.SongUpdateRequest;
import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.repositories.albums.AlbumRepository;
import com.mmul.geniusclone.repositories.songs.SongRepository;
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
    @Autowired
    private AlbumRepository albumRepository;

    @Override
    public Song create(SongCreateRequest request) {
        Song song = new Song(request.link(), false, request.title(), request.image(), albumRepository.findById(request.albumId()).get());
        return songRepository.save(song);
    }

    @Override
    public Song update(UUID id, SongUpdateRequest request) throws IOException {
        Song song = songRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        Song updatedSong = new Song(request.link(), false, request.title(), request.image());
        updatedSong.setId(song.getId());
        updatedSong.setAlbum(albumRepository.findById(request.albumId()).get());
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
