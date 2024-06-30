import { Band } from "../as-is/band";

export interface GetArtistResponse {
    id: string;
    name: string;
    surname: string;
    birthday: string;
    band: Band;
}