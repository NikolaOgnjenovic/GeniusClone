package com.mmul.geniusclone.repositories.reviews;

import com.mmul.geniusclone.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ReviewRepository extends JpaRepository<Review, UUID> {

}
