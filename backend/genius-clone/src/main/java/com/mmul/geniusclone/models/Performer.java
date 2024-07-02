package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public abstract class Performer {
    @Id
    @GeneratedValue
    protected UUID id;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "performer", cascade = CascadeType.ALL)
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
    }

    ;

    public void removeAlbum(Album album) {
        this.albums.remove(album);
    }

    ;
}
