import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

public interface SongService {

    Song saveSong(SongDTO songDTO) throws IOException;

    Song updateSong(UUId id, SongDTO songDTO) throws IOException;

    Song getSong(UUID id);

    List<Song> getAllSongs();

    void deleteSong(UUID id);
}
