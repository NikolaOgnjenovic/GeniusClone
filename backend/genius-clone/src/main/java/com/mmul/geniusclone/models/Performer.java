package com.mmul.geniusclone.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public abstract class Performer {
    @Id
    @GeneratedValue
    protected UUID id;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}
