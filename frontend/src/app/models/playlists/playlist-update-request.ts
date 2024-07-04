import { Song } from "../as-is/song";
import { User } from "../as-is/user";

export interface PlaylistUpdateRequest {
    name: string;
    user: User;
    songs: Song[];
    image: string;
}