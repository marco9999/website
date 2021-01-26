import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiBlogItem, BlogItem, BlogItemRequest } from '../types/blog';
import { ApiBlogNavItem, BlogNavItem } from '../types/blog-nav';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    private currentBlog: Subject<number> = new Subject<number>();

    constructor(private http: HttpClient, private config: ConfigService) {
    }

    getBlog(request: BlogItemRequest): Observable<BlogItem> {
        let requestId = request.id || "latest";
        let url = this.config.getApiConfig().baseUrl + `/blog/${requestId}`
        return this.http.get<ApiBlogItem>(url, { observe: "body", responseType: "json" }).pipe<BlogItem>(
            map((blog) => { 
                return {
                    ...blog,
                    timestamp: DateTime.fromISO(blog.timestamp)
                }
            })
        );
    }

    getBlogHeaders(): Observable<BlogNavItem[]> { 
        let url = this.config.getApiConfig().baseUrl + "/blog"
        return this.http.get<ApiBlogNavItem[]>(url, { observe: "body", responseType: "json" }).pipe<BlogNavItem[]>(
            map((blogItems) => { 
                return blogItems.map((blogItem) => {
                    return { 
                        ...blogItem,
                        timestamp: DateTime.fromISO(blogItem.timestamp),
                    }; 
                });
            })
        );
    }

    setCurrentBlog(blogId: number) {
        this.currentBlog.next(blogId);
    }

    getCurrentBlog(): Observable<number> {
        return this.currentBlog;
    }
}
