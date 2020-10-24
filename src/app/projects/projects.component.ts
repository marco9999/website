import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
        this.projects$ = this.projectsService.getProjects();
    }
}
