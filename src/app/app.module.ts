import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeaderComponent } from './header/header.component';
import { BlogNavComponent } from './blog-nav/blog-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        BlogDetailComponent,
        ProjectsComponent,
        AboutMeComponent,
        ContactMeComponent,
        HeaderComponent,
        BlogNavComponent
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
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
