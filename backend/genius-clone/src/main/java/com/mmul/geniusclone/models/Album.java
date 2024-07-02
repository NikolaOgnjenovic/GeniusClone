package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Album {
    @GeneratedValue
    @Id
    private UUID id;

    private String title;
    private LocalDate releaseDate;

    //@Lob
    private String coverArt;

    @ManyToMany
    private List<Genre> genres;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "performer_id")
    private Performer performer;

    public Album(String title, LocalDate releaseDate, String coverArt) {
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

    public String getCoverArt() {
        return coverArt;
    }

    public void setCoverArt(String coverArt) {
        this.coverArt = coverArt;
    }

    public Performer getPerformer() {
        return performer;
    }

    public void setPerformer(Performer performer) {
        this.performer = performer;
    }
}
