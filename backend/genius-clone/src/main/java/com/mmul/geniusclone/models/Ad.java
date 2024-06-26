package com.mmul.geniusclone.models;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "ads")
public class Ad {
    @Id
    @GeneratedValue
    private UUID id;
    private String link;
    private Byte[] image;

    public Ad(String link, Byte[] image) {
        this.link = link;
        this.image = image;
    }

    public Ad() {

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

    public Byte[] getImage() {
        return image;
    }

    public void setImage(Byte[] image) {
        this.image = image;
    }

}
