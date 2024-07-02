package com.mmul.geniusclone.controllers.reviews;

import com.mmul.geniusclone.dtos.reviews.*;
import com.mmul.geniusclone.services.interfaces.IReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    private final IReviewService reviewService;

    public ReviewController(IReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping()
    public ResponseEntity<ReviewCreateResponse> create(@RequestBody ReviewCreateRequest request) {
        try {
            ReviewCreateResponse response = reviewService.create(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping()
    public ResponseEntity<ReviewGetAllResponse> getAll() {
        try {
            ReviewGetAllResponse response = reviewService.getAll();
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReviewGetByIdResponse> getById(@PathVariable UUID id) {
        try {
            ReviewGetByIdRequest request = new ReviewGetByIdRequest(id);
            ReviewGetByIdResponse response = reviewService.getById(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ReviewDeleteResponse> deleteById(@PathVariable UUID id) {
        try {
            ReviewDeleteRequest request = new ReviewDeleteRequest(id);
            ReviewDeleteResponse response = reviewService.delete(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<ReviewGetAllByUserIdResponse> getAllByUser(@PathVariable UUID id) {
        try {
            ReviewGetAllByUserIdResponse response = reviewService.getByUserId(id);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/song/{id}")
    public ResponseEntity<ReviewGetAllBySongIdResponse> getAllBySong(@PathVariable UUID id) {
        try {
            ReviewGetAllBySongIdResponse response = reviewService.getBySongId(id);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
