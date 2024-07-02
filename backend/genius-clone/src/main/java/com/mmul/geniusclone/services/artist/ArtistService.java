package com.mmul.geniusclone.services.artist;

import com.mmul.geniusclone.dtos.artist.post.PostArtistRequest;
import com.mmul.geniusclone.dtos.artist.put.PutArtistUpdateRequest;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.repositories.artist.ArtistRepository;
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
    public Artist create(PostArtistRequest request) {
        return artistRepository.save(new Artist(request.name(),request.surname(),request.birthday(), request.description(), request.image()));
    }

    @Override
    public Artist update(UUID id, PutArtistUpdateRequest request) {
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
