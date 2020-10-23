import { DateTime } from "luxon";

export interface BlogNavItem {
    id: number,
    title: string,
    timestamp: DateTime
}

export interface BlogNavNode {
    name: string,
    id?: number,
    children?: BlogNavNode[],
}
