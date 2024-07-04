import {Genre} from "./genre";
import { Performer } from "./performer";

export interface Album {
  id: string;
  title: string;
  releaseDate: Date;
  coverArt: string;
  genres: Genre[];
  performer: Performer;
}
