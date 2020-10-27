import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { BlogNavComponent } from './blog-nav/blog-nav.component';
import { AboutMeSocialMediaComponent } from './about-me-social-media/about-me-social-media.component';
import { AboutMeDetailComponent } from './about-me-detail/about-me-detail.component';
import { ProjectsDetailComponent } from './projects-detail/projects-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        BlogDetailComponent,
        ProjectsComponent,
        AboutMeComponent,
        HeaderComponent,
        BlogNavComponent,
        AboutMeSocialMediaComponent,
        AboutMeDetailComponent,
        ProjectsDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatDividerModule,
        MatSidenavModule,
        MatCardModule,
        MatTreeModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MarkdownModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
