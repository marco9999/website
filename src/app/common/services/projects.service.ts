import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiProjectItem, ProjectItem } from '../types/project';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    constructor(private http: HttpClient, private config: ConfigService) {
    }

    getProjects(): Observable<ProjectItem[]> {
        let url = this.config.getApiConfig().baseUrl + "/project"
        return this.http.get<ApiProjectItem[]>(url, { observe: "body", responseType: "json" }).pipe<ProjectItem[]>(
            map((projects) => { 
                return projects.map((project) => {
                    return { 
                        ...project,
                        lastUpdated: DateTime.fromISO(project.lastUpdated),
                    }; 
                });
            })
        );
    }
}
