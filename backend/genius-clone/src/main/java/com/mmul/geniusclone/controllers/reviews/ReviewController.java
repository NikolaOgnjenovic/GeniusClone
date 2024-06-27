package com.mmul.geniusclone.controllers.reviews;

import com.mmul.geniusclone.dtos.reviews.*;
import com.mmul.geniusclone.services.interfaces.IReviewService;
import com.mmul.geniusclone.services.interfaces.IReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/review")
public class ReviewController {
    @Autowired
    private IReviewService reviewService;
    
    @PostMapping()
    public ResponseEntity<ReviewCreateResponse> createReview(@RequestBody ReviewCreateRequest request) {
        try {
            ReviewCreateResponse response = reviewService.create(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping()
    public ResponseEntity<ReviewGetAllResponse> getAllReviews() {
        try {
            ReviewGetAllResponse response = reviewService.getAll();
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewGetByIdResponse> getReviewById(@PathVariable UUID id) {
        try {
            ReviewGetByIdRequest request = new ReviewGetByIdRequest(id);
            ReviewGetByIdResponse response = reviewService.getById(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ReviewDeleteResponse> deleteReview(@PathVariable UUID id) {
        try {
            ReviewDeleteRequest request = new ReviewDeleteRequest(id);
            ReviewDeleteResponse response = reviewService.delete(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<ReviewGetByUserIdResponse> getUsersReviews(@PathVariable UUID userId) {
        try {
            ReviewGetByUserIdRequest request = new ReviewGetByUserIdRequest(userId);
            ReviewGetByUserIdResponse response = reviewService.getByUserId(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/songs/{songId}")
    public ResponseEntity<ReviewGetBySongIdResponse> getSongsReviews(@PathVariable UUID songId) {
        try {
            ReviewGetBySongIdRequest request = new ReviewGetBySongIdRequest(songId);
            ReviewGetBySongIdResponse response = reviewService.getBySongId(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
