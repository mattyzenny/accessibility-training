import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'RadioGroups',
  templateUrl: './radio-groups.component.html',
  styleUrls: ['./radio-groups.component.scss']
})
export class RadioGroupsComponent implements OnInit {
  title = 'Radio Buttons';

  radioGroupList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.radioGroupList = [
      {
        header: 'Name',
        radioGroup: [
          { radioId: 'firstName', label: 'First Name' },
          { radioId: 'middleName', label: 'Middle Name' },
          { radioId: 'other', label: 'Other' },
        ],
      },
      {
        header: 'Type',
        radioGroup: [
          { radioId: 'lastName', label: 'Last Name' },
          { radioId: 'middleName', label: 'Middle Name' },
          { radioId: 'other', label: 'Other' },
        ],
      },
      {
        header: 'Relation',
        radioGroup: [
          { radioId: 'middleName', label: 'Middle Name' },
          { radioId: 'familyName', label: 'Family Name' },
          { radioId: 'other', label: 'Other' },
        ],
      },
    ];
  }
}