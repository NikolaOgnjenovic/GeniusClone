package com.mmul.geniusclone.services.interfaces;

import com.mmul.geniusclone.dtos.ads.*;


public interface IAdService {
    AdCreateResponse create(AdCreateRequest request);
    AdDeleteResponse delete(AdDeleteRequest request);
    AdGetAllResponse getAll();
    AdGetByIdResponse getById(AdGetByIdRequest request);

}
