package com.mmul.geniusclone.services.band;

import com.mmul.geniusclone.dtos.band.post.PostBandRequest;
import com.mmul.geniusclone.dtos.band.put.PutBandUpdateRequest;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.models.Band;
import com.mmul.geniusclone.repositories.artist.ArtistRepository;
import com.mmul.geniusclone.repositories.band.BandRepository;
import com.mmul.geniusclone.services.interfaces.IBandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class BandService implements IBandService
{
    @Autowired
    private BandRepository bandRepository;
    @Autowired
    private ArtistRepository artistRepository;

    public Band getById(UUID id) {
        return bandRepository.findById(id).orElse(null);
    }

    public Band create(PostBandRequest request) {
        return bandRepository.save(new Band(request.name()));
    }

    @Override
    public Band update(UUID id, PutBandUpdateRequest request) {
        Band band = bandRepository.findById(id).orElseThrow(() -> new RuntimeException("Song not found"));
        band.setName(request.name());
        return bandRepository.save(band);
    }

    public List<Band> getAll() {
        return bandRepository.findAll();
    }

    public void delete(UUID id) {
        bandRepository.deleteById(id);
    }

    @Transactional
    public Band addArtistToBand(UUID bandId, UUID artistId) {
        Optional<Band> bandOpt = bandRepository.findById(bandId);
        Optional<Artist> artistOpt = artistRepository.findById(artistId);

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
    public Band removeArtistFromBand(UUID bandId, UUID artistId) {
        Optional<Band> bandOpt = bandRepository.findById(bandId);
        Optional<Artist> artistOpt = artistRepository.findById(artistId);

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
