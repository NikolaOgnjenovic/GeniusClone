package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.band.BandAddArtistRequest;
import com.mmul.geniusclone.dtos.band.BandCreateRequest;
import com.mmul.geniusclone.dtos.band.BandRemoveArtistRequest;
import com.mmul.geniusclone.dtos.band.BandUpdateRequest;
import com.mmul.geniusclone.models.Band;

import java.util.List;
import java.util.UUID;

public interface IBandService {
    Band getById(UUID id);
    void delete(UUID id);
    Band create(BandCreateRequest request);
    Band update(UUID id, BandUpdateRequest request);
    List<Band> getAll();
    Band addArtist(UUID bandId, BandAddArtistRequest request);
    Band removeArtist(UUID bandId, BandRemoveArtistRequest request);
}