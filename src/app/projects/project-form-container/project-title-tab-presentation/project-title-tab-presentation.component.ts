import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectTitleTabPresenterService } from '../project-title-tab-presenter/project-title-tab-presenter.service';

@Component({
  selector: 'app-project-title-tab-presentation',
  templateUrl: './project-title-tab-presentation.component.html',
  viewProviders: [ProjectTitleTabPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectTitleTabPresentationComponent implements OnInit {

  public projectForm: FormGroup;
  constructor(
    private projectFormPresenter: ProjectTitleTabPresenterService,
    private route: Router,
    private location: Location

  ) {
    this.projectForm = this.projectFormPresenter.buildform()
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.projectFormPresenter.onSubmit(this.projectForm)
    console.log(this.projectForm.value);
    this.route.navigateByUrl(`/projects/form/project-info`)
  }
  onCancel() {
    this.location.back();
  }
}
