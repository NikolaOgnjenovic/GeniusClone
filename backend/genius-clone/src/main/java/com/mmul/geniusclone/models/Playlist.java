package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
public class Playlist {
    @Id
    @GeneratedValue
    private UUID id;

    private String name;

    @JsonIgnoreProperties("playlists")
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonIgnoreProperties("playlists")
    @ManyToMany
    @JoinTable(
            name = "playlist_song",
            joinColumns = @JoinColumn(name = "playlist_id"),
            inverseJoinColumns = @JoinColumn(name = "song_id")
    )
    private List<Song> song;

    public Playlist(String name, User user)
    {
        this.name = name;
        this.user = user;
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

    public List<Song> getSong() {
        return song;
    }

    public void setSong(List<Song> song) {
        this.song = song;
    }

    public void addSong(Song song) { this.song.add(song); }

    public void removeSong(Song song) { this.song.remove(song); }
}
