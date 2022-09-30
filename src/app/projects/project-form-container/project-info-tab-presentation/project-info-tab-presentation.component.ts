import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info-tab-presentation',
  templateUrl: './project-info-tab-presentation.component.html'
})
export class ProjectInfoTabPresentationComponent implements OnInit {

  billing: string[];
  status: string[];
  constructor(
    private location: Location
  ) {
    this.billing = [
      'Fixed Price',
      'Daily',
      'Hourly rate',
      'Milestone billing',
      'Time & Material Contract',
    ];
    this.status = [
      'Live',
      'In Development',
      'Approved',
      'Pending Approval',
      'Okay to Start',
      'Scheduled',
      'In Planning',
      'In Setup',
      'Inactive',
      'On Hold',
      'Not Started',
      'On Track',
      'In Testing',
      'Ready For Testing',
      'Needs Review',
      'Past Due',
      'Requires Feedback',
      'Terminated',
      'Closed',
      'Completed',
      'Delievered',
    ];
  }

  ngOnInit(): void {
  }

  public onBack() {
    this.location.back();
  }
}