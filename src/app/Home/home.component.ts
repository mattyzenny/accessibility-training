import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Accessibility Sandbox';

  constructor() { }

  ngOnInit(): void {
  }

}
