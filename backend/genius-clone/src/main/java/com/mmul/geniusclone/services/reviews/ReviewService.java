package com.mmul.geniusclone.services.reviews;

import com.mmul.geniusclone.dtos.reviews.*;
import com.mmul.geniusclone.models.Review;
import com.mmul.geniusclone.repositories.reviews.ReviewRepository;
import com.mmul.geniusclone.services.interfaces.IReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ReviewService implements IReviewService{
    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public ReviewCreateResponse create(ReviewCreateRequest request) {
        Review review = new Review(request.user(), request.song(), request.value(), request.description());
        reviewRepository.save(review);

        return new ReviewCreateResponse(review.getId(),
                                        review.getUser(),
                                        review.getSong(),
                                        review.getValue(),
                                        review.getDescription());
    }

    @Override
    public ReviewDeleteResponse delete(ReviewDeleteRequest request) {
        reviewRepository.findById(request.id())
                .orElseThrow(() -> new RuntimeException("Review not found"));
        reviewRepository.deleteById(request.id());
        return new ReviewDeleteResponse();
    }

    @Override
    public ReviewGetAllResponse getAll() {
        List<Review> reviews = reviewRepository.findAll();

        return new ReviewGetAllResponse(reviews);
    }

    @Override
    public ReviewGetByIdResponse getById(ReviewGetByIdRequest request) {
        Review review = reviewRepository.findById(request.id())
                .orElseThrow(() -> new RuntimeException("Review not found"));

        return new ReviewGetByIdResponse(review.getId(),
                                        review.getUser(),
                                        review.getSong(),
                                        review.getValue(),
                                        review.getDescription());
    }

    @Override
    public ReviewGetAllByUserIdResponse getByUserId(UUID id) {
        List<Review> reviews = reviewRepository.findByUserId(id);

        return new ReviewGetAllByUserIdResponse(reviews);
    }

    @Override
    public ReviewGetAllBySongIdResponse getBySongId(UUID id) {
        List<Review> reviews = reviewRepository.findBySongId(id);

        return new ReviewGetAllBySongIdResponse(reviews);
    }
}
