package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
public class Playlist {
    @Id
    @GeneratedValue
    private UUID id;

    private String image;
    private String name;

    @JsonIgnoreProperties("playlists")
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonIgnoreProperties("album")
    @ManyToMany()
    @JoinTable(
            name = "playlist_song",
            joinColumns = @JoinColumn(name = "playlist_id"),
            inverseJoinColumns = @JoinColumn(name = "song_id")
    )
    private List<Song> songs;

    public Playlist(String name, User user, String image)
    {
        this.name = name;
        this.user = user;
        this.image = image;
    }

    public Playlist(String name, User user, List<Song> songs, String image)
    {
        this.name = name;
        this.user = user;
        this.songs = songs;
        this.image = image;
    }

    public Playlist() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Song> getSongs() {
        return songs;
    }

    public void setSongs(List<Song> song) {
        this.songs = song;
    }

    public void addSong(Song song) { this.songs.add(song); }

    public void removeSong(Song song) { this.songs.remove(song); }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}