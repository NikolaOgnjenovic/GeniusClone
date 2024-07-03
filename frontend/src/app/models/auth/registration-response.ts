import { Playlist } from "../as-is/playlist";

export interface RegistrationResponse {
  id: string;
  email: string;
  roles: string[];
  playlists: Playlist[];
}
