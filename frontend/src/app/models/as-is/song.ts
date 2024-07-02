import {Album} from "./album";

export interface Song {
  id: string;
  link: string;
  isPendingReview: boolean;
  album: Album;
  title: string;
}
