import { Band } from "../as-is/band";

export interface GetArtistResponse {
    id: string;
    name: string;
    surname: string;
    birthday: string;
    description: string;
    image: string;
    bands: Band[];
}