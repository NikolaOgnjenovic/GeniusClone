package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

import static jakarta.persistence.FetchType.EAGER;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Performer {
    @Id
    @GeneratedValue
    protected UUID id;

    @JsonIgnoreProperties("performer")
    @OneToMany(mappedBy = "performer", cascade = CascadeType.ALL, orphanRemoval = true, fetch = EAGER)
    @JsonManagedReference
    public List<Album> albums;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    protected List<Album> getAlbums() {
        return albums;
    }
    public void setAlbums(List<Album> albums) {
        this.albums = albums;
    }

    public void addAlbum(Album album) {
        this.albums.add(album);
    };

    public void removeAlbum(Album album) {
        this.albums.remove(album);
    };
}
