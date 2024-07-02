package com.mmul.geniusclone.services.albums;

import com.mmul.geniusclone.dtos.albums.AlbumCreateRequest;
import com.mmul.geniusclone.dtos.albums.AlbumUpdateRequest;
import com.mmul.geniusclone.models.Album;
import com.mmul.geniusclone.models.Performer;
import com.mmul.geniusclone.repositories.albums.AlbumRepository;
import com.mmul.geniusclone.repositories.band.BandRepository;
import com.mmul.geniusclone.repositories.performers.PerformerRepository;
import com.mmul.geniusclone.services.interfaces.IAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AlbumService implements IAlbumService {
    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private PerformerRepository performerRepository;
    @Autowired
    private BandRepository bandRepository;


    @Override
    public Album getById(UUID id) {
        return albumRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(UUID id) {
        albumRepository.deleteById(id);
    }

    @Override
    public Album create(AlbumCreateRequest request) {
        return albumRepository.save(new Album(request.title(),request.releaseDate(), request.coverArt()));
    }

    @Override
    public Album update(UUID id, AlbumUpdateRequest request) {
        Album album = albumRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        album.setTitle(request.title());
        album.setReleaseDate(request.releaseDate());
        album.setCoverArt(request.coverArt());
        return albumRepository.save(album);    }

    @Override
    public List<Album> getAll() {
        return albumRepository.findAll();
    }

    @Transactional
    public Album setPerformer(UUID albumId, UUID performerId) {
        Optional<Performer> performerOpt = performerRepository.findById(performerId);
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
}
