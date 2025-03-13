import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  HostListener,
} from '@angular/core';
import { ReflowService } from 'src/app/Services/ReflowService/reflow.service';

@Component({
  selector: 'AriaLive',
  templateUrl: './aria-live.component.html',
  styleUrls: ['./aria-live.component.scss'],
})
export class AriaLiveComponent implements AfterViewInit, OnInit {
  title = 'Aria-Live';
  inputValue = '';
  hiddenAlert = '';
  radioGroupList: any[] = [];

  //Logic 2 different ways |  ViewChild && [(ngModel)]
  @ViewChild('inputForm') input!: ElementRef;
  @ViewChildren('radioGroupForms') radioGroupQueryList!: QueryList<ElementRef>;
  constructor(public reflowService: ReflowService) {}

  ngOnInit(): void {
    this.radioGroupList = [
      {
        header: 'Are you a student?',
        groupName: 'Student',
        radioGroup: [
          { radioId: 'yes', label: 'Yes' },
          { radioId: 'no', label: 'No' },
        ],
      },
      {
        header: 'Which District are you from?',
        groupName: 'School-District',
        radioGroup: [
          { radioId: 'Carmel', label: 'Carmel' },
          { radioId: 'Zionsville', label: 'Zionsville' },
        ],
        isHidden: true,
      },
    ];
  };

  ngAfterViewInit(): void {
    this.handleHidden();
    this.reflowService.checkViewport();

  };

  // ─────────────────────────────────────────────────────────────
  // SECTION 1: First Input Logic ( Uses ViewChild & [(ngModel)] )
  // ─────────────────────────────────────────────────────────────

  handleChange(event: Event) {
    this.removeInput(event);
  }

  //Removes the Input Value
  removeInput(event: Event) {
    if (this.input.nativeElement.value) {
      console.log('Input Content Removed: ' + this.input.nativeElement.value);
      this.input.nativeElement.value = '';
      this.updateAlert();
    }
  }

  //Updates the aria-live region
  updateAlert() {
    // adds custom message to alert
    if (this.inputValue) {
      this.hiddenAlert = this.inputValue;
      console.log('Hidden Alert Message Applied: ' + this.hiddenAlert);
    }
    // default message if no custom message is applied
    else {
      this.hiddenAlert = 'Content Cleared, No Custom Message Was Applied!';
      console.log(this.hiddenAlert);
    }
  }

  //Clears the aria-live region
  clearAlert() {
    if (this.hiddenAlert) {
      this.hiddenAlert = '';
      console.log('Hidden Alert Message Removed!');
    }
  }

  // ─────────────────────────────────────────────────────────────
  // SECTION 2: Second Input Logic ( Uses ViewChild )
  // ─────────────────────────────────────────────────────────────

  //Hides Radio Group if isHidden is true
  handleHidden() {
    this.radioGroupQueryList.toArray().forEach((celRadioGroup, index) => {
      if (this.radioGroupList[index].isHidden) {
        celRadioGroup.nativeElement.style.display = 'none';
      }
    });
  }

  //Toggles the Radio Group Visibility
  displayToggle(event: Event) {
    this.radioGroupList.forEach((radioProp) => {
      radioProp.radioGroup.forEach((radio: any) => {
        // Hiding the second radio group based on isHidden property
        if (radio.radioId === 'yes' && radio.checked) {
          this.radioGroupQueryList.forEach((celRadioGroup, index) => {
            if (this.radioGroupList[index].isHidden) { 
              celRadioGroup.nativeElement.style.display = 'none';
              console.dir(`${celRadioGroup.nativeElement.localName}` + ' : ' + `${celRadioGroup.nativeElement.groupName}` + ": Hidden" );
            }
          });
        }
        if (radio.radioId === 'no' && radio.checked) {
          this.radioGroupQueryList.forEach((celRadioGroup, index) => {
            if (this.radioGroupList[index].isHidden) {
              celRadioGroup.nativeElement.style.display = 'block';
              console.dir(`${celRadioGroup.nativeElement.localName}` + ' : ' + `${celRadioGroup.nativeElement.groupName}` + ": Visible" );
            }
          });
        }
      });
    });
  }


  // ─────────────────────────────────────────────────────────────
  // Reflow Service:  ( Uses ReflowService )
  // ─────────────────────────────────────────────────────────────


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
