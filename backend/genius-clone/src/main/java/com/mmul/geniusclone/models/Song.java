import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Lob
    private byte[] songData;

    private boolean isPendingReview = false;

    private String title;

    public Song() { }

    public Song(UUID id, byte[] songData, boolean isPendingReview, String title) {
        this.id = id;
        this.songData = songData;
        this.isPendingReview = isPendingReview;
        this.title = title;
    }

    public Song(byte[] songData, boolean isPendingReview, String title) {
        this.songData = songData;
        this.isPendingReview = isPendingReview;
        this.title = title;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

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
}

