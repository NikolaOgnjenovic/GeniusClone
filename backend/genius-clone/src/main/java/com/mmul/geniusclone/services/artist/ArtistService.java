package com.mmul.geniusclone.services.artist;

import com.mmul.geniusclone.dtos.auth.post.PostArtistRequest;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.repositories.auth.ArtistRepository;
import com.mmul.geniusclone.services.interfaces.IArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ArtistService implements IArtistService {
    @Autowired
    private ArtistRepository artistRepository;

    @Override
    public Artist getById(UUID id) {
        return artistRepository.findById(id).orElse(null);
    }

    @Override
    public void delete(UUID id) {
        artistRepository.deleteById(id);
    }

    @Override
    public void add(PostArtistRequest artist) {
        artistRepository.save(new Artist(artist.name(),artist.surname(),artist.birthday()));
    }

    @Override
    public List<Artist> getAll() {
        return artistRepository.findAll();
    }
}
