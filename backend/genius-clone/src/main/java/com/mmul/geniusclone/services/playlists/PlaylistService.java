package com.mmul.geniusclone.services.playlists;

import com.mmul.geniusclone.dtos.playlists.delete.PlaylistRemoveSongsRequest;
import com.mmul.geniusclone.dtos.playlists.post.PlaylistCreateRequest;
import com.mmul.geniusclone.dtos.playlists.put.PlaylistAddSongsRequest;
import com.mmul.geniusclone.dtos.playlists.put.PlaylistUpdateRequest;
import com.mmul.geniusclone.models.Playlist;
import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.repositories.playlists.PlaylistRepository;
import com.mmul.geniusclone.services.interfaces.IAuthService;
import com.mmul.geniusclone.services.interfaces.IPlaylistService;
import com.mmul.geniusclone.services.songs.SongService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PlaylistService implements IPlaylistService {
    private final SongService songService;
    private PlaylistRepository playlistRepository;
    private IAuthService authService;

    public PlaylistService(PlaylistRepository playlistRepository, IAuthService authService, SongService songService)
    {
        this.playlistRepository = playlistRepository;
        this.authService = authService;
        this.songService = songService;
    }

    @Override
    public Playlist getById(UUID id) {
        return playlistRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(UUID id) {
        playlistRepository.deleteById(id);
    }

    @Override
    public Playlist create(PlaylistCreateRequest request) {
        Playlist playlist = new Playlist(request.name(), authService.getById(UUID.fromString(request.userId())));
        return playlistRepository.save(playlist);
    }

    @Override
    public Playlist update(UUID id, PlaylistUpdateRequest request) {
        Playlist playlist = playlistRepository.findById(id).orElse(null);
        playlist.setName(request.name());
        playlist.setUser(authService.getById(UUID.fromString(request.userId())));

        return playlistRepository.save(playlist);
    }

    @Override
    public List<Playlist> getAll() {
        return playlistRepository.findAll();
    }

    @Override
    @Transactional
    public Playlist addSongs(UUID playlistId, PlaylistAddSongsRequest request) {
        Optional<Playlist> playlistOpt = playlistRepository.findById(playlistId);
        if (playlistOpt.isPresent() && !request.songIds().isEmpty()) {
            Playlist playlist = playlistOpt.get();
            for (String songId : request.songIds()) {
                Song song = songService.getById(UUID.fromString(songId));
                if (song != null) {
                    playlist.addSong(song);
                    playlistRepository.save(playlist);
                } else {
                    throw new RuntimeException("Playlist or Song not found");
                }
            }
            return playlist;
        }
        return null;
    }

    @Override
    @Transactional
    public Playlist removeSongs(UUID playlistId, PlaylistRemoveSongsRequest request) {
        Optional<Playlist> playlistOpt = playlistRepository.findById(playlistId);
        if (playlistOpt.isPresent() && !request.songIds().isEmpty()) {
            Playlist playlist = playlistOpt.get();
            for (String songId : request.songIds()) {
                Song song = songService.getById(UUID.fromString(songId));
                if (song != null) {
                    playlist.removeSong(song);
                    playlistRepository.save(playlist);
                } else {
                    throw new RuntimeException("Playlist or Song not found");
                }
            }
            return playlist;
        }
        return null;
    }
}
