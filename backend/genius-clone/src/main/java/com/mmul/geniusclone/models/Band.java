package com.mmul.geniusclone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.mmul.geniusclone.models.Artist;
import com.mmul.geniusclone.models.Performer;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Band extends Performer {
    private String name;

    public Band(String bandName){
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

    public Band() {

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
}
