import { DateTime } from 'luxon';

export interface ProjectItem {
    title: string,
    description: string | null,
    lastUpdated: DateTime,
    imageUrl: string | null,
    url: string
}
