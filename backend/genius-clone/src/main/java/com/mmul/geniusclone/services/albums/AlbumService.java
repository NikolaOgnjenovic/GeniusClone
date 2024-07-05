package com.mmul.geniusclone.services.albums;


import com.mmul.geniusclone.dtos.albums.AlbumAddGenreRequest;
import com.mmul.geniusclone.models.*;
import com.mmul.geniusclone.repositories.albums.AlbumRepository;

import com.mmul.geniusclone.dtos.albums.AlbumAddPerformerRequest;
import com.mmul.geniusclone.dtos.albums.AlbumCreateRequest;
import com.mmul.geniusclone.dtos.albums.AlbumUpdateRequest;
import com.mmul.geniusclone.models.Album;
import com.mmul.geniusclone.models.Performer;

import com.mmul.geniusclone.repositories.performers.PerformerRepository;
import com.mmul.geniusclone.services.interfaces.IAlbumService;
import com.mmul.geniusclone.services.interfaces.IGenreService;
import com.mmul.geniusclone.services.interfaces.ISongService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AlbumService implements IAlbumService {
    private final AlbumRepository albumRepository;
    private final PerformerRepository performerRepository;
    private final IGenreService genreService;
    private final ISongService songService;

    public AlbumService(AlbumRepository albumRepository, PerformerRepository performerRepository, IGenreService genreService, ISongService songService) {
        this.albumRepository = albumRepository;
        this.performerRepository = performerRepository;
        this.genreService = genreService;
        this.songService = songService;
    }

    @Override
    public Album getById(UUID id) {
        return albumRepository.findById(id).orElse(null);
    }


    @Override
    @Transactional
    public void delete(UUID id) {
        for(Song song: albumRepository.findById(id).get().songs){
            songService.delete(song.getId());
        }
        albumRepository.deleteById(id);
    }

    @Override
    public Album create(AlbumCreateRequest request) {
        Album album = new Album(request.title(), request.releaseDate(), request.coverArt(), request.genres());
        return albumRepository.save(album);
    }

    @Override
    public Album update(UUID id, AlbumUpdateRequest request) {
        Album album = albumRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        album.setTitle(request.title());
        album.setReleaseDate(request.releaseDate());
        album.setCoverArt(request.coverArt());
        album.setGenres(request.genres());
        return albumRepository.save(album);
    }

    @Override
    public List<Album> getAll() {
        return albumRepository.findAll();
    }

    @Transactional
    public Album addPerformer(UUID albumId, AlbumAddPerformerRequest request) {
        Optional<Performer> performerOpt = performerRepository.findById(request.performerId());
        Optional<Album> albumOpt = albumRepository.findById(albumId);

        if (performerOpt.isPresent() && albumOpt.isPresent()) {
            Performer performer = performerOpt.get();
            Album album = albumOpt.get();

            performer.addAlbum(album);
            album.setPerformer(performer);

            performerRepository.save(performer);
            return albumRepository.save(album);
        } else {
            throw new RuntimeException("Performer or Album not found");
        }
    }

    @Transactional
    public Album removePerformer(UUID albumId, UUID performerId) {
        Optional<Performer> performerOpt = performerRepository.findById(performerId);
        Optional<Album> albumOpt = albumRepository.findById(albumId);

        if (performerOpt.isPresent() && albumOpt.isPresent()) {
            Performer performer = performerOpt.get();
            Album album = albumOpt.get();

            performer.removeAlbum(album);
            album.setPerformer(null);

            performerRepository.save(performer);
            return albumRepository.save(album);
        } else {
            throw new RuntimeException("Performer or Album not found");
        }
    }

    @Transactional
    public Album addGenre(UUID albumId, UUID genreId) {
        Genre genre = genreService.getById(genreId);
        Optional<Album> albumOpt = albumRepository.findById(albumId);

        if (genre!=null && albumOpt.isPresent()) {
            Album album = albumOpt.get();

            album.addGenre(genre);

            return albumRepository.save(album);
        } else {
            throw new RuntimeException("Performer or Album not found");
        }
    }

    @Transactional
    public Album removeGenre(UUID albumId, UUID genreId) {
        Genre genre = genreService.getById(genreId);
        Optional<Album> albumOpt = albumRepository.findById(albumId);

        if (genre!=null && albumOpt.isPresent()) {
            Album album = albumOpt.get();

            album.removeGenre(genre);

            return albumRepository.save(album);
        } else {
            throw new RuntimeException("Performer or Album not found");
        }
    }
}
