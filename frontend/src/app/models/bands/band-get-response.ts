import {Artist} from "../as-is/artist";

export interface BandGetResponse {
  id: string;
  name: string;
  members: Artist[];
}
