import { Band } from "../as-is/band";

export interface ArtistCreateRequest {
    name: string;
    surname: string;
    birthday: string;
    description: string;
    image: string;
    bands: Band[];
}
