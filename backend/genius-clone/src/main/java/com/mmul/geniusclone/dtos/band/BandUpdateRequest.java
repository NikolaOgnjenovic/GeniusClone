package com.mmul.geniusclone.dtos.band;

import com.mmul.geniusclone.models.Artist;

import java.util.List;

public record BandUpdateRequest(String name, List<Artist> members) { }