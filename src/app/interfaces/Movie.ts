import {Genre} from "./Genre";
import {Director} from "./Director";
import {Actor} from "./Actor";
import {Rating} from "./Rating";

export interface Movie {
    id: number;
    title: string;
    year: number;
    duration: number;
    synopsis: string;
    genre: Genre;
    director: Director;
    actors: Actor[];
    ratings: Rating[];
}
