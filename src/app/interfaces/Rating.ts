import {Member} from "./Member";

export interface Rating {
    id: number;
    note: number;
    comment: string;
    member: Member;
}
