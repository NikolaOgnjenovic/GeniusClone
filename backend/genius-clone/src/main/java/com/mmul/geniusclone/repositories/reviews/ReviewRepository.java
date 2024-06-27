package com.mmul.geniusclone.repositories.reviews;

import com.mmul.geniusclone.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ReviewRepository extends JpaRepository<Review, UUID> {
    List<Review> findByUserId(UUID userId);
    List<Review> findBySongId(UUID songId);
}
