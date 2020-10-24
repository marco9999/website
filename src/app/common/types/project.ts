import { DateTime } from 'luxon';

export interface ProjectItem {
    title: string,
    description: string,
    lastUpdated: DateTime,
    imageUrl: string,
    url: string
}
