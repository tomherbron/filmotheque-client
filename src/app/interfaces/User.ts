import {Rating} from "./Rating";
import {Movie} from "./Movie";
import {Genre} from "./Genre";

export interface User {
  id: number;
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
  password: string;
  gender: string;
  birthDate: Date;
  isAdmin: boolean;
  ratings: Rating[];
  likedMovies: Movie[];
  dislikedMovies: Movie[];
  favoriteGenres: Genre[];
}
