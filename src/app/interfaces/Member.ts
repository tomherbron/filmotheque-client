import {Rating} from "./Rating";

export interface Member {
  userName: string;
  password: string;
  isAdmin: boolean;
  ratings: Rating[];
}
