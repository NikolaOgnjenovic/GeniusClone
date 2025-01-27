package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;
import java.util.UUID;

@Entity
public class Band extends Performer {
    private String name;

    public Band(String bandName) {
        id = UUID.randomUUID();
        name = bandName;
    }

    @JsonIgnoreProperties({"memberOf", "albums"})
    @ManyToMany
    @JoinTable(
            name = "band_artist",
            joinColumns = @JoinColumn(name = "band_id"),
            inverseJoinColumns = @JoinColumn(name = "artist_id")
    )
    private List<Artist> members;

    private String image;

    public Band() {}

    public Band(String name, String image) {
        this.name = name;
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Artist> getMembers() {
        return members;
    }

    public void setMembers(List<Artist> members) {
        this.members = members;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
