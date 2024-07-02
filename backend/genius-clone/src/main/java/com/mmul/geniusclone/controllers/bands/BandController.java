package com.mmul.geniusclone.controllers.bands;


import com.mmul.geniusclone.dtos.band.BandAddArtistRequest;
import com.mmul.geniusclone.dtos.band.BandRemoveArtistRequest;
import com.mmul.geniusclone.dtos.band.BandCreateRequest;
import com.mmul.geniusclone.dtos.band.BandUpdateRequest;
import com.mmul.geniusclone.models.Band;
import com.mmul.geniusclone.services.interfaces.IBandService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/bands")
public class BandController {
    private final IBandService bandService;

    public BandController(IBandService bandService) {
        this.bandService = bandService;
    }

    @GetMapping
    public List<Band> getAll() {
        return bandService.getAll();
    }

    @GetMapping("/{id}")
    public Band getById(@PathVariable UUID id) {
        return bandService.getById(id);
    }

    @PostMapping
    public Band create(@RequestBody BandCreateRequest request) {
        return bandService.create(request);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable UUID id) {
        bandService.delete(id);
    }

    @PostMapping("/artists/{bandId}")
    public Band addArtistToBand(@PathVariable UUID bandId, @RequestBody BandAddArtistRequest request) {
        return bandService.addArtist(bandId, request);
    }

    @DeleteMapping("/artists/{bandId}")
    public Band removeArtistFromBand(@PathVariable UUID bandId, @RequestBody BandRemoveArtistRequest request) {
        return bandService.removeArtist(bandId, request);
    }

    @PutMapping("/{id}")
    public Band update(@PathVariable UUID id, @RequestBody BandUpdateRequest request) {
        return bandService.update(id, request);
    }
}