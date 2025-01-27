package com.mmul.geniusclone.services.bands;

import com.mmul.geniusclone.dtos.band.BandAddArtistRequest;
import com.mmul.geniusclone.dtos.band.BandCreateRequest;
import com.mmul.geniusclone.dtos.band.BandRemoveArtistRequest;
import com.mmul.geniusclone.dtos.band.BandUpdateRequest;
import com.mmul.geniusclone.models.Album;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.models.Band;
import com.mmul.geniusclone.models.Song;
import com.mmul.geniusclone.repositories.artists.ArtistRepository;
import com.mmul.geniusclone.repositories.band.BandRepository;
import com.mmul.geniusclone.services.interfaces.IAlbumService;
import com.mmul.geniusclone.services.interfaces.IBandService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BandService implements IBandService
{
    private final BandRepository bandRepository;
    private final ArtistRepository artistRepository;
    private final IAlbumService albumService;

    public BandService(BandRepository bandRepository, ArtistRepository artistRepository, IAlbumService albumService) {
        this.bandRepository = bandRepository;
        this.artistRepository = artistRepository;
        this.albumService = albumService;
    }

    public Band getById(UUID id) {
        return bandRepository.findById(id).orElse(null);
    }

    public Band create(BandCreateRequest request) {
        return bandRepository.save(new Band(request.name(), request.image()));
    }

    @Override
    @Transactional
    public Band update(UUID id, BandUpdateRequest request) {
        Band band = bandRepository.findById(id).orElseThrow(() -> new RuntimeException("Band not found"));
        band.setName(request.name());
        band.setImage(request.image());
        for(Artist artist : request.members()) {
            this.addArtist(id, new BandAddArtistRequest(artist.getId()));
        }
        return bandRepository.save(band);
    }

    public List<Band> getAll() {
        return bandRepository.findAll();
    }


    public void delete(UUID id)
    {
        for(Album album: bandRepository.findById(id).get().albums){
            albumService.delete(album.getId());
        }
        bandRepository.deleteById(id);
    }

    @Transactional
    public Band addArtist(UUID bandId, BandAddArtistRequest request) {
        Optional<Band> bandOpt = bandRepository.findById(bandId);
        Optional<Artist> artistOpt = artistRepository.findById(request.artistId());

        if (bandOpt.isPresent() && artistOpt.isPresent()) {
            Band band = bandOpt.get();
            Artist artist = artistOpt.get();

            band.getMembers().add(artist);
            artist.addMembership(band);

            artistRepository.save(artist);
            return bandRepository.save(band);
        } else {
            throw new RuntimeException("Band or Artist not found");
        }
    }

    @Transactional
    public Band removeArtist(UUID bandId, BandRemoveArtistRequest request) {
        Optional<Band> bandOpt = bandRepository.findById(bandId);
        Optional<Artist> artistOpt = artistRepository.findById(request.artistId());

        if (bandOpt.isPresent() && artistOpt.isPresent()) {
            Band band = bandOpt.get();
            Artist artist = artistOpt.get();

            band.getMembers().remove(artist);
            artist.removeMembership(band);

            artistRepository.save(artist);
            return bandRepository.save(band);
        } else {
            throw new RuntimeException("Band or Artist not found");
        }
    }
}
