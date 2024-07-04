import { Genre } from "../as-is/genre";

export interface AdUpdateRequest {
    image: string;
    link: string;
    genre: Genre;
}