import { Playlist } from "./playlist";
import {UserRole} from "./user-role";

export interface User {
  id: string;
  email: string;
  playlists: Playlist[];
  roles: UserRole[];
}
