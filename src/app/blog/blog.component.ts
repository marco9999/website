import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-blog',
    templateUrl: 'blog.component.html',
    styleUrls: ['blog.component.css']
})
export class BlogComponent implements OnInit {
    blogId$: Observable<string>;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.blogId$ = this.route.paramMap.pipe(
            map((v) => v.get("id"))
        );
    }
}
