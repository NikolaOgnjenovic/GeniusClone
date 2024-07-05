package com.mmul.geniusclone.services.artist;

import com.mmul.geniusclone.dtos.artist.ArtistCreateRequest;
import com.mmul.geniusclone.dtos.artist.ArtistUpdateRequest;
import com.mmul.geniusclone.dtos.band.BandRemoveArtistRequest;
import com.mmul.geniusclone.models.Album;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.models.Band;
import com.mmul.geniusclone.repositories.artists.ArtistRepository;
import com.mmul.geniusclone.services.bands.BandService;
import com.mmul.geniusclone.services.interfaces.IAlbumService;
import com.mmul.geniusclone.services.interfaces.IArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ArtistService implements IArtistService {
    private final ArtistRepository artistRepository;
    private final IAlbumService albumService;
    private final BandService bandService;

    public ArtistService(IAlbumService albumService, ArtistRepository artistRepository, BandService bandService) {
        this.albumService = albumService;
        this.artistRepository = artistRepository;
        this.bandService = bandService;
    }

    @Override
    public Artist getById(UUID id) {
        return artistRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public void delete(UUID id)
    {
        List<Band> bandsToRemove = new ArrayList<Band>();
        for(Band band: artistRepository.findById(id).get().getMemberOf())
        {
            bandsToRemove.add(band);
        }
        for(Band band: bandsToRemove){
            bandService.removeArtist(band.getId(),new BandRemoveArtistRequest(id));
        }
        for(Album album: artistRepository.findById(id).get().albums){
            albumService.delete(album.getId());
        }
        artistRepository.deleteById(id);
    }

    @Override
    public Artist create(ArtistCreateRequest request) {
        return artistRepository.save(new Artist(request.name(),request.surname(),request.birthday(), request.description(), request.image()));
    }

    @Override
    public Artist update(UUID id, ArtistUpdateRequest request) {
        Artist artist = artistRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        artist.setName(request.name());
        artist.setSurname(request.surname());
        artist.setBirthday(request.birthday());
        artist.setDescription(request.description());
        artist.setImage(request.image());
        return artistRepository.save(artist);
    }


    @Override
    public List<Artist> getAll() {
        return artistRepository.findAll();
    }

    @Override
    public void addMembership() {

    }
}
