import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'TextFields',
  templateUrl: './text-fields.component.html',
  styleUrls: ['./text-fields.component.scss']
})
export class TextFieldsComponent implements OnInit {
  title = 'Text Fields';

  constructor() { }

  ngOnInit(): void {
  }

}
