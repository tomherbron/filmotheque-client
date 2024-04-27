import {User} from "./User";

export interface Rating {
    id: number;
    note: number;
    comment: string;
    user: User;
}
