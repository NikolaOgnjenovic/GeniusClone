import {Genre} from "../as-is/genre";

export interface AlbumUpdateRequest {
  title: string;
  releaseDate: Date;
  coverArt: string;
  genres: Genre[];
}
