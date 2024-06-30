import { Band } from "../band";

export interface UpdateArtistRequst {
    name: string;
    surname: string;
    birthday: string;
    band: Band;
}