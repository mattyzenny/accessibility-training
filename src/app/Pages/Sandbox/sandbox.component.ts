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
  selector: 'Sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent implements AfterViewInit, OnInit {
  title = 'Sandbox';
  inputValue = '';
  hiddenAlert = '';
  radioGroupList: any[] = [];
  customMessage = "Surprise Box";
  chestInput = '';
  pendingChestMessage = '';
  showMessage = false;
  showRadioDemo = false;

  //Logic 2 different ways |  ViewChild && [(ngModel)]
  @ViewChild('inputForm') input!: ElementRef;
  @ViewChildren('radioGroupForms') radioGroupQueryList!: QueryList<ElementRef>;
  constructor(public reflowService: ReflowService) { }

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

  // Generic announcer that reuses the existing hiddenAlert-bound live region
  announce(message: string) {
    // Clear then set to retrigger screen reader announcement
    this.hiddenAlert = '';
    setTimeout(() => { this.hiddenAlert = message; }, 30);
  }

  // Stores the custom message for the chest and announces a sent status
  sendCustomMessage() {
    const text = (this.chestInput || '').trim();
    // Store for later reveal, but do NOT change the visible H3 yet
    if (text) {
      this.pendingChestMessage = text;
    }
    // Clear the input to simulate "sent"
    this.chestInput = '';
    // Announce status to the aria-live region
    this.announce('Custom message has been sent, open your box for a surprise');
  }

  // ─────────────────────────────────────────────────────────────
  // Treasure Chest demo (minimal; uses existing live region)
  // ─────────────────────────────────────────────────────────────
  openChest() {
    // Attempt to play Lottie animation if the web component is available
    const player = document.getElementById('treasurePlayer') as any;
    if (player) {
      player.seek?.(0);
      player.play?.();
    }

    // Reveal the pending message now that the chest is opened
    const revealed = (this.pendingChestMessage || this.customMessage || 'Surprise!');
    this.showMessage = false;
    // Make the revealed message the new visible content under the H3
    this.customMessage = revealed;
    setTimeout(() => {
      this.showMessage = true;
    }, 2000);
    // Clear pending so subsequent opens don't repeat unless resubmitted
    this.pendingChestMessage = '';
    // Announce the revealed message
    this.announce(revealed);
    console.log(revealed);
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
              console.dir(`${celRadioGroup.nativeElement.localName}` + ' : ' + `${celRadioGroup.nativeElement.groupName}` + ": Hidden");
            }
          });
        }
        if (radio.radioId === 'no' && radio.checked) {
          this.radioGroupQueryList.forEach((celRadioGroup, index) => {
            if (this.radioGroupList[index].isHidden) {
              celRadioGroup.nativeElement.style.display = 'block';
              console.dir(`${celRadioGroup.nativeElement.localName}` + ' : ' + `${celRadioGroup.nativeElement.groupName}` + ": Visible");
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
