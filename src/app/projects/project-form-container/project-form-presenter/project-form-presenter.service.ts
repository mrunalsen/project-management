import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Projects } from '../../projects.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectFormPresenterService {
  private projectFormData: Subject<Projects>
  public projectFormData$: Observable<Projects>

  constructor(
    private fb: FormBuilder
  ) {
    this.projectFormData = new Subject()
    this.projectFormData$ = new Observable()
  }
  buildform() {
    return this.fb.group({
      title: ['', Validators.required],
      info: ['', Validators.required],
      category: ['', Validators.required],
    })
  }
  onSubmit(projectForm: FormGroup) {
    if (!projectForm.valid) {
      return
    }
    this.projectFormData.next(projectForm.value)
  }
}
