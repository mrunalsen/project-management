import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ProjectInfo } from '../../projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoTabPresenterService {

  private projectInfoData: Subject<ProjectInfo>
  public projectInfoData$: Observable<ProjectInfo>
  constructor(
    private infoForm: FormBuilder
  ) {
    this.projectInfoData = new Subject()
    this.projectInfoData$ = new Observable()
    this.projectInfoData$ = this.projectInfoData.asObservable()
  }





}
