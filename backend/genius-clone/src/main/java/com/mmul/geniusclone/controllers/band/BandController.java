package com.mmul.geniusclone.controllers.band;


import com.mmul.geniusclone.dtos.band.post.PostBandRequest;
import com.mmul.geniusclone.dtos.band.put.PutBandUpdateRequest;
import com.mmul.geniusclone.models.Band;
import com.mmul.geniusclone.services.band.BandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/band")
public class BandController {
    @Autowired
    private BandService bandService;

    @GetMapping
    public List<Band> getAllBands() {
        return bandService.getAll();
    }

    @GetMapping("/{id}")
    public Band getBand(@PathVariable UUID id) {
        return bandService.getById(id);
    }

    @PostMapping
    public void createArtist(@RequestBody PostBandRequest request) {
        bandService.create(request);
    }

    @DeleteMapping("/{id}")
    public void deleteArtist(@PathVariable UUID id) {
        bandService.delete(id);
    }

    @PostMapping("/{bandId}/addArtist/{artistId}")
    public Band addArtistToBand(@PathVariable UUID bandId, @PathVariable UUID artistId) {
        return bandService.addArtistToBand(bandId, artistId);
    }

    @DeleteMapping("/{bandId}/removeArtist/{artistId}")
    public Band removeArtistFromBand(@PathVariable UUID bandId, @PathVariable UUID artistId) {
        return bandService.removeArtistFromBand(bandId, artistId);
    }

    @PutMapping("/update/{id}")
    public Band updateSong(@PathVariable UUID id,
                                             @RequestBody PutBandUpdateRequest request) {
        
        return bandService.update(id, request);
    }
}