import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html',
})
export class ProjectFormContainerComponent implements OnInit {
  // bootstrap: any
  public btn1!: boolean;
  public btn2!: boolean;
  constructor(private route: Router) { }

  ngOnInit(): void {

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
