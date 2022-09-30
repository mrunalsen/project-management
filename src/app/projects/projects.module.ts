import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectInfoContainerComponent } from './project-info-container/project-info-container.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectTitleTabPresentationComponent } from './project-form-container/project-title-tab-presentation/project-title-tab-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectInfoTabPresentationComponent } from './project-form-container/project-info-tab-presentation/project-info-tab-presentation.component';
import { ProjectsService } from './projects.service';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectFormContainerComponent,
    ProjectInfoContainerComponent,
    ProjectListContainerComponent,
    ProjectListPresentationComponent,
    ProjectTitleTabPresentationComponent,
    ProjectInfoTabPresentationComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
