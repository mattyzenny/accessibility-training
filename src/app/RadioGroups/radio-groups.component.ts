import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { ReflowService } from 'src/app/Services/reflow.service';

@Component({
  selector: 'RadioGroups',
  templateUrl: './radio-groups.component.html',
  styleUrls: ['./radio-groups.component.scss'],
})
export class RadioGroupsComponent implements AfterViewInit {
  title = 'Radio Buttons';
  radioGroupList: any[] =[];
  constructor(public reflowService: ReflowService) {}
  testRadioGroupList = 
    {
      header: "test",
      radioGroup: [
        { radioId: 'test1', label: 'test1' },
        { radioId: 'test2', label: 'test2' },
        { radioId: 'test3', label: 'test3' },
      ]
    }
  ;
  

  ngOnInit(){


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

  ngAfterViewInit() {
    this.reflowService.checkViewport();
  }

  // Listens to the window resize event
  // The '$event' is not necessary for this case but can be useful for debugging
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.reflowService.checkViewport();
  }

  // Getter to expose the isMobile property from the ReflowService to the template
  // This allows us to conditionally render elements in the template based on whether the screen is mobile-sized
  get isMobile() {
    return this.reflowService.isMobile;
  }
}

