import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProjectFormPresenterService } from '../project-form-presenter/project-form-presenter.service';

@Component({
  selector: 'app-project-form-presentation',
  templateUrl: './project-form-presentation.component.html'
})
export class ProjectFormPresentationComponent implements OnInit {

  public projectForm: FormGroup;
  constructor(
    private projectFormPresenter: ProjectFormPresenterService,
    private location: Location
  ) {
    this.projectForm = this.projectFormPresenter.buildform()
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.projectFormPresenter.onSubmit(this.projectForm)
  }
  onCancel() {
    this.location.back();
  }
}
