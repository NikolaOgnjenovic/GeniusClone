package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.reviews.*;

public interface IReviewService {
    ReviewCreateResponse create(ReviewCreateRequest request);
    ReviewDeleteResponse delete(ReviewDeleteRequest request);
    ReviewGetAllResponse getAll();
    ReviewGetByIdResponse getById(ReviewGetByIdRequest request);
}
