import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Projects } from '../projects.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html',
})
export class ProjectFormContainerComponent implements OnInit {
  // bootstrap: any
  public btn1!: boolean;
  public btn2!: boolean;

  public projectTitle$: Observable<Projects[]>

  constructor(
    private route: Router,
    private projectService: ProjectsService
  ) {
    this.projectTitle$ = new Observable()
  }

  ngOnInit(): void {
    this.getTitle()

  }
  public getTitle() {
    this.projectTitle$ = this.projectService.getTitle()
  }

  public addTitleData(form: Projects) {
    this.projectService.addTitle(form).subscribe((res: Projects) => {
      // alert('Post Success')
      console.log(res);

      this.route.navigateByUrl('/projects/form/project-info')
    })
  }

  public onRoute() {
    if (this.route.url === '/projects/form/project-title') {
      this.btn2 = true;
      this.btn1 = false;
    }
    else {
      this.btn1 = true;
      this.btn2 = false;
    }
  }
}
