package com.mmul.geniusclone.controllers.ads;


import com.mmul.geniusclone.dtos.ads.*;
import com.mmul.geniusclone.services.interfaces.IAdService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/ads")
public class AdController {
    private final IAdService adService;

    AdController(IAdService adService) {
        this.adService = adService;
    }

    @PostMapping()
    public ResponseEntity<AdCreateResponse> create(@RequestBody AdCreateRequest request) {
        try {
            AdCreateResponse response = adService.create(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @GetMapping()
    public ResponseEntity<AdGetAllResponse> getAll() {
        try {
            AdGetAllResponse response = adService.getAll();
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdGetByIdResponse> getById(@PathVariable UUID id) {
        try {
            AdGetByIdRequest request = new AdGetByIdRequest(id);
            AdGetByIdResponse response = adService.getById(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<AdDeleteResponse> deleteById(@PathVariable UUID id) {
        try {
            AdDeleteRequest request = new AdDeleteRequest(id);
            AdDeleteResponse response = adService.delete(request);
            return ResponseEntity.ok(response);
        } catch (Exception ex) {
            return ResponseEntity.notFound().build();
        }
    }
}
