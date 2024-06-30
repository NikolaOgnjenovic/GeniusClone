import { Band } from "../band";

export interface GetArtistResponse {
    id: string;
    name: string;
    surname: string;
    birthday: string;
    band: Band;
}