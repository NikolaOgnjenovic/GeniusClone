import { Band } from "../as-is/band";

export interface CreateArtistRequest {
    name: string;
    surname: string;
    birthday: string;
    description: string;
    image: string;
    bands: Band[];
}