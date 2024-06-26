package com.mmul.geniusclone.services.ads;

import com.mmul.geniusclone.dtos.ads.*;
import com.mmul.geniusclone.models.Ad;
import com.mmul.geniusclone.repositories.ads.AdRepository;
import com.mmul.geniusclone.services.interfaces.IAdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdService implements IAdService {
    @Autowired
    private AdRepository adRepository;
    @Override
    public AdCreateResponse create(AdCreateRequest request) {
        Ad ad = new Ad(request.link(), request.image(), request.genreId());
        adRepository.save(ad);

        return new AdCreateResponse(ad.getId(), ad.getLink(), ad.getImage(), ad.getGenreId());
    }

    @Override
    public AdDeleteResponse delete(AdDeleteRequest request) {
        adRepository.findById(request.id())
                .orElseThrow(() -> new RuntimeException("Ad not found"));
        adRepository.deleteById(request.id());
        return new AdDeleteResponse();
    }

    @Override
    public AdGetAllResponse getAll() {
        List<Ad> ads = adRepository.findAll();

        return new AdGetAllResponse(ads);
    }

    @Override
    public AdGetByIdResponse getById(AdGetByIdRequest request) {
        Ad ad = adRepository.findById(request.id())
                .orElseThrow(() -> new RuntimeException("Ad not found"));

        return new AdGetByIdResponse(ad.getId(), ad.getLink(), ad.getImage(), ad.getGenreId());
    }
}
