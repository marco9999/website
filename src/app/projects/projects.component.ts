import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsService } from '../common/services/projects.service';
import { ProjectItem } from '../common/types/project';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects$: Observable<ProjectItem[]>;

    constructor(private projectsService: ProjectsService) {
    }

    ngOnInit(): void {
        this.projects$ = this.projectsService.getProjects().pipe(
            map((projects) => {
                return projects.sort((project1, project2) => {
                    // Sorted descending order.
                    if (project1.lastUpdated > project2.lastUpdated) {
                        return -1;
                    } else if (project1.lastUpdated < project2.lastUpdated) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            })
        );
    }
}
