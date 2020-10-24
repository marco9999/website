import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';
import { ProjectItem } from '../types/project';

const PROJECTS_DEMO: ProjectItem[] = [
    { 
        title: "psx-rs", 
        description: "Work in progress Playstation emulator written in Rust", 
        lastUpdated: DateTime.utc(2020, 8, 21, 1, 0, 0, 0), 
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        url: "https://github.com/marcosatti/psx-rs" 
    },
    { 
        title: "psx-rs", 
        description: "Work in progress Playstation emulator written in Rust", 
        lastUpdated: DateTime.utc(2020, 8, 21, 1, 0, 0, 0), 
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        url: "https://github.com/marcosatti/psx-rs" 
    },
    { 
        title: "psx-rs", 
        description: "Work in progress Playstation emulator written in Rust", 
        lastUpdated: DateTime.utc(2020, 8, 21, 1, 0, 0, 0), 
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        url: "https://github.com/marcosatti/psx-rs" 
    },
    { 
        title: "psx-rs", 
        description: "Work in progress Playstation emulator written in Rust", 
        lastUpdated: DateTime.utc(2020, 8, 21, 1, 0, 0, 0), 
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        url: "https://github.com/marcosatti/psx-rs" 
    },
    { 
        title: "psx-rs", 
        description: "Work in progress Playstation emulator written in Rust", 
        lastUpdated: DateTime.utc(2020, 8, 21, 1, 0, 0, 0), 
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        url: "https://github.com/marcosatti/psx-rs" 
    },
    { 
        title: "psx-rs", 
        description: "Work in progress Playstation emulator written in Rust", 
        lastUpdated: DateTime.utc(2020, 8, 21, 1, 0, 0, 0), 
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        url: "https://github.com/marcosatti/psx-rs" 
    },
    { 
        title: "psx-rs", 
        description: "Work in progress Playstation emulator written in Rust", 
        lastUpdated: DateTime.utc(2020, 8, 21, 1, 0, 0, 0), 
        imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg",
        url: "https://github.com/marcosatti/psx-rs" 
    }
];


@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    constructor() {
    }

    getProjects(): Observable<ProjectItem[]> {
        return of(PROJECTS_DEMO);
    }
}
