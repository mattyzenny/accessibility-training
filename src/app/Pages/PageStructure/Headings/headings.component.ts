import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Headings',
  templateUrl: './headings.component.html',
  styleUrls: ['./headings.component.scss'],
})
export class HeadingsComponent implements OnInit {
  title = 'Headings';
  dashboard = './assets/page-structure-examples/HeadingDashboard.png';
  aboutMe = './assets/page-structure-examples/AboutMeHeadings.png';
  accountHeadings = './assets/page-structure-examples/AccountHeadings.png';
  assignmentSummary =
    './assets/page-structure-examples/HeadingAssignmentSummary.png';
  constructor() {}

  ngOnInit(): void {}
}
