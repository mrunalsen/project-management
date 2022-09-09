import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectTitleTabPresentationComponent } from './project-form-container/project-title-tab-presentation/project-title-tab-presentation.component';
import { TaskTabPresentationComponent } from './project-form-container/task-tab-presentation/task-tab-presentation.component';
import { ProjectInfoContainerComponent } from './project-info-container/project-info-container.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '', component: ProjectsComponent,
    children: [

      {
        path: 'list', component: ProjectListContainerComponent
      },
      {
        path: 'form', component: ProjectFormContainerComponent,
        children: [
          {
            path: 'project-title', component: ProjectTitleTabPresentationComponent
          },
          {
            path: 'task-title', component: TaskTabPresentationComponent
          },
          {
            path: ``,
            pathMatch: `full`,
            redirectTo: `project-title`
          }
        ]
      },
      {
        path: 'info', component: ProjectInfoContainerComponent
      },
      {
        path: 'task', component: TaskTabPresentationComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
