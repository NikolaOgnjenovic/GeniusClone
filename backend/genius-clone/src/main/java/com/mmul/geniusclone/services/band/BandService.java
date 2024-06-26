package com.mmul.geniusclone.services.band;

import com.mmul.geniusclone.dtos.auth.post.PostBandRequest;
import com.mmul.geniusclone.models.Band;
import com.mmul.geniusclone.repositories.auth.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BandService
{
    @Autowired
    private BandRepository bandRepository;

    public Band getById(UUID id) {
        return bandRepository.findById(id).orElse(null);
    }

    public void add(PostBandRequest band) {
        bandRepository.save(new Band(band.name()));
    }

    public List<Band> findAll() {
        return bandRepository.findAll();
    }

    public void delete(UUID id) {
        bandRepository.deleteById(id);
    }
}
