package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.auth.post.PostArtistRequest;
import com.mmul.geniusclone.dtos.auth.post.PostBandRequest;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.models.Band;

import java.util.List;
import java.util.UUID;

public interface IBandService {
    public Band getById(UUID id);
    public void delete(UUID id);
    public void add(PostBandRequest band);
    public List<Band> getAll();
}
