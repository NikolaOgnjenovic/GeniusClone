package com.mmul.geniusclone.dtos.song;

import com.mmul.geniusclone.models.Song;

public class SongDTO {


    private byte[] songData;

    private boolean isPendingReview = false;

    private String title;

    public byte[] getSongData() {
        return songData;
    }

    public void setSongData(byte[] songData) {
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
        return new Song(this.songData, this.isPendingReview, this.title);
    }
}

