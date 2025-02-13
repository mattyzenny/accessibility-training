import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HowTo',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {
  title = 'How To';

  constructor() { }

  ngOnInit(): void {
  }

}
