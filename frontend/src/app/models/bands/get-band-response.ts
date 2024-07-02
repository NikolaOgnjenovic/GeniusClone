import {Artist} from "../as-is/artist";

export interface GetBandResponse {
  id: string;
  name: string;
  members: Artist[];
}
