import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.scss']
})
export class LandmarksComponent implements OnInit {

  title="Landmarks";
  landmarkDashboard = './assets/page-structure-examples/dashboardLandmark.png';
  landmarkNormal = './assets/page-structure-examples/normalLandmark.png';
  constructor() { }

  ngOnInit(): void {
  }

}
