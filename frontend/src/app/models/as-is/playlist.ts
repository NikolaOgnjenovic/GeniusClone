import { Song } from "./song";
import { User } from "./user";

export interface Playlist {
    id: string;
    name: string;
    user: User;
    songs: Song[];
}