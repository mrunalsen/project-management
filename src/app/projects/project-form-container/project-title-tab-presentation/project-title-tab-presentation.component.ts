import { Location } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Projects } from '../../projects.model';
import { ProjectTitleTabPresenterService } from '../project-title-tab-presenter/project-title-tab-presenter.service';

@Component({
  selector: 'app-project-title-tab-presentation',
  templateUrl: './project-title-tab-presentation.component.html',
  viewProviders: [ProjectTitleTabPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectTitleTabPresentationComponent implements OnInit {

  admin: boolean = false

  @Input() public set projectTitleData(value: Projects[] | null) {
    if (value) {
      console.log(value);
      this._projectTitle = value
      // this.formTitle = 'Edit Title',
      // this.projectForm.patchValue(value);
    }
  }
  public get projectTitleData(): Projects[] | null {
    return this._projectTitle;
  }

  @Output() add: EventEmitter<Projects>;
  public projectForm: FormGroup;
  public formTitle: string
  private _projectTitle!: Projects[]

  constructor(
    private projectFormPresenter: ProjectTitleTabPresenterService,
    private route: Router,
    private location: Location
  ) {
    this.projectForm = this.projectFormPresenter.buildform()
    this.add = new EventEmitter();
    this.formTitle = 'Add Title'
  }

  ngOnInit(): void {
    this.projectFormPresenter.projectFormData$.subscribe((res) => {
      this.add.emit(res);
    })
  }

  onNext() {
    this.projectFormPresenter.onSubmit(this.projectForm)
    console.log(this.projectForm.value);
    // this.route.navigateByUrl(`/projects/form/project-info`)
  }
  onCancel() {
    this.location.back();
  }
}
