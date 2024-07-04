import { Genre } from "../as-is/genre";

export interface AdGetResponse {
    id: string;
    image: string;
    link : string;
    genre: Genre;
}