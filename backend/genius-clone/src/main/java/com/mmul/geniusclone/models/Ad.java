package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "ads")
public class Ad {
    @GeneratedValue
    @Id
    private UUID id;
    private String link;
    private String image;

    @JsonIgnoreProperties("ads")
    @ManyToOne
    @JoinColumn(name = "genre_id", nullable = false)
    private Genre genre;

    public Ad(String link, String image, Genre genre) {
        this.link = link;
        this.image = image;
        this.genre = genre;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }
}
