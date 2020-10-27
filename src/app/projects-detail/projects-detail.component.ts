import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from '../common/types/project';

@Component({
    selector: 'app-projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component.css']
})
export class ProjectsDetailComponent implements OnInit {
    @Input() project: ProjectItem;

    constructor() {
    }

    ngOnInit(): void {
    }
}
