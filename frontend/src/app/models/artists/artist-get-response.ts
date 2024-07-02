import { Band } from "../as-is/band";

export interface ArtistGetResponse {
    id: string;
    name: string;
    surname: string;
    birthday: string;
    description: string;
    image: string;
    bands: Band[];
}
