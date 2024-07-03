import { Genre } from "./genre";

export interface Ad {
    id: string;
    image: string;
    link: string;
    genre: Genre;
}