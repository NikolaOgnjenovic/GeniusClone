import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface SongService {

    Song saveSong(MultipartFile file, String title) throws IOException;

    Song updateSong(UUID id, MultipartFile file, String title, boolean isPendingReview) throws IOException;

    Song getSong(UUID id);

    List<Song> getAllSongs();

    void deleteSong(UUID id);
}
