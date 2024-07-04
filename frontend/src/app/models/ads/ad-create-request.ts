import { Genre } from "../as-is/genre";

export interface AdCreateRequest {
    image: string;
    link: string;
    genre: Genre;
}