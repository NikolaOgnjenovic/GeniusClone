package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "reviews")
public class Review {
    @GeneratedValue
    @Id
    private UUID id;

    @JsonIgnoreProperties("reviews")
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @JsonIgnoreProperties("reviews")
    @ManyToOne
    @JoinColumn(name = "song_id")
    Song song;

    short value;

    String description;


    public Review(User user, Song song, short value, String description) {
        this.user = user;
        this.song = song;
        this.value = value;
        this.description = description;
    }

    public Review() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public short getValue() {
        return value;
    }

    public void setValue(short value) {
        this.value = value;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Song getSong() {
        return song;
    }

    public void setSong(Song song) {
        this.song = song;
    }
}
