package com.mmul.geniusclone.dtos.reviews;

import com.mmul.geniusclone.models.Review;

import java.util.List;

public record ReviewGetAllBySongIdResponse(List<Review> reviews) { }
