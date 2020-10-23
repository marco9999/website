import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    { path: '', redirectTo: '/blog', pathMatch: 'full' },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: BlogComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'contact-me', component: ContactMeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
