import {Genre} from "../as-is/genre";

export interface AlbumCreateRequest {
  title: string;
  releaseDate: Date;
  coverArt: string;
  genres: Genre[];
}
