import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-tab-presentation',
  templateUrl: './task-tab-presentation.component.html'
})
export class TaskTabPresentationComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  public onCancel() {
    this.location.back();
  }
}
