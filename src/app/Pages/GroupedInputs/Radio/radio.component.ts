import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ReflowService } from 'src/app/Services/ReflowService/reflow.service';

@Component({
  selector: 'Radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements AfterViewInit {
  @ViewChild('toggleButton') toggleButtonRef!: ElementRef;
  isPressed: boolean = false;
  title = 'Radio Groups';
  radioGroupList: any[] =[];
  onSubmitRadioGroupList: any[] = [];
  constructor(public reflowService: ReflowService) {}
  
  ngOnInit(){

    this.onSubmitRadioGroupList = [
      {
        header: 'Enable Toggle',
        radioGroup: [
          { radioId: 'yes', label: 'Yes' },
          { radioId: 'no', label: 'No' }
        ]
      },
    ],

      {
        header: 'Color',
        radioGroup: [
          { radioId: 'blue', label: 'Blue' },
          { radioId: 'red', label: 'Red', disabled: true },
          { radioId: 'green', label: 'Green' },
        ],
      }

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
        header: 'Color',
        radioGroup: [
          { radioId: 'blue', label: 'Blue' },
          { radioId: 'red', label: 'Red', disabled: true },
          { radioId: 'green', label: 'Green' },
        ],
      }
    ];
  }

  ngAfterViewInit() {
    this.reflowService.checkViewport();
  }

  isActive() {
    const button = this.toggleButtonRef.nativeElement;
    const currentState = button.getAttribute('aria-pressed') === 'true';
    this.isPressed = !currentState;

    button.setAttribute('aria-pressed', this.isPressed ? 'true' : 'false');
    return this.isPressed;
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

