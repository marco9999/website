import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
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
import { ConfigService } from './common/services/config.service';
import { BlogMetaComponent } from './blog-meta/blog-meta.component';

export function configServiceProviderFactory(config: ConfigService) {
    return () => { 
        return config.loadConfigData(); 
    };
}

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
        ProjectsDetailComponent,
        BlogMetaComponent
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
    providers: [
        ConfigService,
        { 
            provide: APP_INITIALIZER, 
            useFactory: configServiceProviderFactory,
            deps: [ConfigService],
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
