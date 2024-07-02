package com.mmul.geniusclone.dtos.song;

import com.mmul.geniusclone.models.Song;

import java.util.Base64;

public class SongDTO {


    private String songData;

    private boolean isPendingReview = false;

    private String title;

    public String getSongData() {
        return songData;
    }

    public void setSongData(String songData) {
        this.songData = songData;
    }

    public boolean isPendingReview() {
        return isPendingReview;
    }

    public void setPendingReview(boolean pendingReview) {
        isPendingReview = pendingReview;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Song toSong() {
        return new Song(Base64.getDecoder().decode(this.songData), this.isPendingReview, this.title);
    }
}

