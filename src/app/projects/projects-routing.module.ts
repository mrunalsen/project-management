import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectInfoTabPresentationComponent } from './project-form-container/project-info-tab-presentation/project-info-tab-presentation.component';
import { ProjectTitleTabPresentationComponent } from './project-form-container/project-title-tab-presentation/project-title-tab-presentation.component';
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
            path: 'project-info', component: ProjectInfoTabPresentationComponent
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
        path: 'task', component: ProjectInfoContainerComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
