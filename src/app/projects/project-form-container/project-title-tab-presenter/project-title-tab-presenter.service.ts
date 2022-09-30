import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Projects } from '../../projects.model';

@Injectable()
export class ProjectTitleTabPresenterService {

  private projectFormData: Subject<Projects>
  public projectFormData$: Observable<Projects>

  constructor(
    private fb: FormBuilder
  ) {
    this.projectFormData = new Subject()
    this.projectFormData$ = new Observable()
    this.projectFormData$ = this.projectFormData.asObservable()
  }

  buildform() {
    return this.fb.group({
      title: [''],
      info: [''],
      category: [''],
    })
  }

  onSubmit(projectForm: FormGroup) {
    if (!projectForm.valid) {
      return
    }
    this.projectFormData.next(projectForm.value)
  }
}
