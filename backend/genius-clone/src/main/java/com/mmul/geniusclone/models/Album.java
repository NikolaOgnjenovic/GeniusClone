package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity
public class Album {
    @GeneratedValue
    @Id
    private UUID id;

    private String title;
    private LocalDate releaseDate;

    @Lob
    private byte[] coverArt;

    @ManyToMany
    private List<Genre> genres;

    @ManyToOne
    @JoinTable(
            name = "album_performer",
            joinColumns = @JoinColumn(name = "album_id"),
            inverseJoinColumns = @JoinColumn(name = "performer")
    )
    private Performer performer;

    public Album(String title, LocalDate releaseDate, byte[] coverArt) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.coverArt = coverArt;
        this.performer = null;
    }

    public Album() {

    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public byte[] getCoverArt() {
        return coverArt;
    }

    public void setCoverArt(byte[] coverArt) {
        this.coverArt = coverArt;
    }

    public Performer getPerformer() {
        return performer;
    }

    public void setPerformer(Performer performer) {
        this.performer = performer;
    }
}
