package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.band.BandCreateRequest;
import com.mmul.geniusclone.dtos.band.BandUpdateRequest;
import com.mmul.geniusclone.models.Band;

import java.util.List;
import java.util.UUID;

public interface IBandService {
    public Band getById(UUID id);
    public void delete(UUID id);
    public Band create(BandCreateRequest request);
    public Band update(UUID id, BandUpdateRequest request);
    public List<Band> getAll();
    public Band addArtistToBand(UUID bandId, UUID artistId);
    public Band removeArtistFromBand(UUID bandId, UUID artistId);

    }
