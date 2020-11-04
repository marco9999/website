import { DateTime } from 'luxon';

export interface BlogItemRequest {
    id?: string
}

export interface BlogItem {
    id: number, 
    title: string,
    timestamp: DateTime,
    body: string
}

export interface ApiBlogItem {
    id: number, 
    title: string,
    timestamp: string,
    body: string
}
