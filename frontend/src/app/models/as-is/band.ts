import {Artist} from "./artist";

export interface Band {
  id: string;
  name: string;
  members: Artist[];
}
