package com.mmul.geniusclone.dtos.reviews;

import com.mmul.geniusclone.models.Review;

import java.util.List;

public record ReviewGetBySongIdResponse(List<Review> reviews) {
}
