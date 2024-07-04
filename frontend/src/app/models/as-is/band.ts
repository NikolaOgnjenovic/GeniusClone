import {Artist} from "./artist";
import { Performer } from "./performer";

export interface Band extends Performer {
  members: Artist[];
  image: string;
}
