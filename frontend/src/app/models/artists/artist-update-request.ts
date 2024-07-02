import { Band } from "../as-is/band";

export interface ArtistUpdateRequest {
    name: string;
    surname: string;
    birthday: string;
    description: string;
    image: string;
    bands: Band[];
}
