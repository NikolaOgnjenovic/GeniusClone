package com.mmul.geniusclone.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "genres")
public class gitGenre {
    @GeneratedValue
    @Id
    private UUID id;
    @Column(unique = true)
    String name;

    public Genre(String name) {
        this.name = name;
    }

    public Genre() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getId() {
        return id;
    }
}
