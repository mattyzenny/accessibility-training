import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  title = 'Buttons';

  constructor() { }

  ngOnInit(): void {
  }

}
