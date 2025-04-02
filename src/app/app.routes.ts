import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamplePageComponent } from './examples/example-page/example-page.component';
import { ExampleTableComponent } from './examples/example-table/example-table.component';
import { FaqComponent } from './faq/faq.component';
import { ProjectToDoListComponent } from './projects/project-to-do-list/project-to-do-list.component';
import { ProjectDashboardComponent } from './projects/project-dashboard/project-dashboard.component';
import { ProjectCrudComponent } from './projects/project-crud/project-crud.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'examples/example-page', component: ExamplePageComponent },
    { path: 'examples/example-table', component: ExampleTableComponent },
    { path: 'projects/project-to-do-list', component: ProjectToDoListComponent },
    { path: 'projects/project-dashboard', component: ProjectDashboardComponent },
    { path: 'projects/project-crud', component: ProjectCrudComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'exit', redirectTo: '/home', pathMatch: 'full' },
];
