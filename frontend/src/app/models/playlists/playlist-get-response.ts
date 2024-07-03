import { Song } from "../as-is/song";
import { User } from "../as-is/user";

export interface PlaylistGetResponse {
    id: string;
    name: string;
    user: User;
    songs: Song[];
}