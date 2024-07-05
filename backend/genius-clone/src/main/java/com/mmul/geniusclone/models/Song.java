package com.mmul.geniusclone.models;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "songs")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String link;

    private boolean isPendingReview = false;

    private String title;

    private String image;

    public Song() { }

    @JsonIgnoreProperties("songs")
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "album_id")
    private Album album;


    public Song(String link, boolean isPendingReview, String title, String image, Album album) {
        this.link = link;
        this.isPendingReview = isPendingReview;
        this.title = title;
        this.album = album;
        this.image = image;
    }

    public Song(String link, boolean isPendingReview, String title, String image) {
        this.link = link;
        this.isPendingReview = isPendingReview;
        this.title = title;
        this.image = image;
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

    public boolean isPendingReview() {
        return isPendingReview;
    }

    public void setPendingReview(boolean pendingReview) {
        isPendingReview = pendingReview;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}