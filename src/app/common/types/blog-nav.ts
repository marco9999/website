import { DateTime } from "luxon";

export interface BlogNavItem {
    id: number,
    title: string,
    timestamp: DateTime
}

export interface ApiBlogNavItem {
    id: number,
    title: string,
    timestamp: string
}

export interface BlogNavNode {
    name: string,
    id?: number,
    children?: BlogNavNode[],
}
