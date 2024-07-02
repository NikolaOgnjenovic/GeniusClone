package com.mmul.geniusclone.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
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

    @JsonIgnoreProperties("members")
    @ManyToMany(mappedBy = "members")
    private List<Band> memberOf;

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

    public List<Band> getMemberOf() {
        return memberOf;
    }

    public void setMemberOf(List<Band> bands) {
        this.memberOf = bands;
    }

    public void addMembership(Band band){
        this.memberOf.add(band);
    }

    public void removeMembership(Band band){
        this.memberOf.remove(band);
    }
}
