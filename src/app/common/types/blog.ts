import { DateTime } from 'luxon';

export interface BlogItemRequest {
    id?: string
}

export interface BlogItem {
    id: number, 
    title: string,
    timestamp: DateTime,
    markdown: string
}
