package com.mmul.geniusclone.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class Genre {
    @GeneratedValue
    @Id
    private UUID id;
}
