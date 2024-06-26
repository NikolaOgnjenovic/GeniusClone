package com.mmul.geniusclone.models;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
public class Artist extends Performer {
    private String name;
    private String surname;
    private LocalDate birthday;

    public Artist(String artistName, String artistSurname, LocalDate artistBirthday){
        name = artistName;
        surname = artistSurname;
        birthday = artistBirthday;
    }

    @ManyToOne
    private Band band;

    public Artist() {

    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public Band getBand() {
        return band;
    }

    public void setBand(Band band) {
        this.band = band;
    }

}
