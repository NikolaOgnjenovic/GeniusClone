package com.mmul.geniusclone.services.songs;

import com.mmul.geniusclone.dtos.song.SongCreateRequest;
import com.mmul.geniusclone.dtos.song.SongUpdateRequest;
import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.repositories.albums.AlbumRepository;
import com.mmul.geniusclone.repositories.playlists.PlaylistRepository;
import com.mmul.geniusclone.repositories.reviews.ReviewRepository;
import com.mmul.geniusclone.repositories.songs.SongRepository;
import com.mmul.geniusclone.services.interfaces.ISongService;
import com.mmul.geniusclone.services.playlists.PlaylistService;
import jakarta.transaction.Transactional;
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
    @Autowired
    private PlaylistRepository playlistRepository;
    @Autowired
    private ReviewRepository reviewRepository;

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
    @Transactional
    public void delete(UUID songId) {
        this.playlistRepository.findAll().forEach(playlist -> {
            playlist.getSongs().removeIf(song -> song.getId().equals(songId));
            playlistRepository.save(playlist);
        });
        reviewRepository.findBySongId(songId).forEach(review -> {
            reviewRepository.delete(review);
        });
        songRepository.deleteById(songId);
    }
}
