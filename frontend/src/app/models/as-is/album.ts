import {Genre} from "./genre";

export interface Album {
  id: string;
  title: string;
  releaseDate: Date;
  coverArt: string;
  genres: Genre[];
}
