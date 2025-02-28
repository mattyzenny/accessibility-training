import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.scss']
})
export class LandmarksComponent implements OnInit {

  title="Landmarks";
  
  constructor() { }

  ngOnInit(): void {
  }

}
