import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BlogService } from '../common/services/blog.service';
import { BlogItem } from '../common/types/blog';

@Component({
    selector: 'app-blog-detail',
    templateUrl: 'blog-detail.component.html',
    styleUrls: ['blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnChanges {
    @Input() blogId: string | undefined;
    blog: BlogItem;

    constructor(private blogService: BlogService) {
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["blogId"]) {
            this.handleBlog();
        }
    }

    handleBlog(): void {
        this.blog = this.blogService.getBlog({ id: this.blogId });
    }
}
