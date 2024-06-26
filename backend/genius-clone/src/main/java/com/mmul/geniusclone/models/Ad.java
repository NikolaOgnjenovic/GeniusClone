package com.mmul.geniusclone.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "ads")
public class Ad {
    @GeneratedValue
    @Id
    private UUID id;
    private String link;
    private byte[] image;
    private UUID genreId;

    public Ad(String link, byte[] image, UUID genreId) {
        this.link = link;
        this.image = image;
        this.genreId = genreId;
    }

    public Ad() {

    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public UUID getGenreId() {
        return genreId;
    }

    public void setGenreId(UUID genreId) {
        this.genreId = genreId;
    }
}
